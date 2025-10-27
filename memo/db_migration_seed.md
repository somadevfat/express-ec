# DB Migration & Seed 手順（Docker + Prisma + PostgreSQL）

このドキュメントは、Docker で起動した PostgreSQL に対して Prisma のマイグレーションを適用し、シードデータを投入、接続確認するための手順をまとめたものです。

- 対象ファイル/設定
  - docker-compose: `docker-compose.yml`
  - Prisma スキーマ: `prisma/schema.prisma`
  - 環境変数: `.env.development`（`DATABASE_URL` は `postgresql://user:password@db:5432/express-tuto?schema=public`）
  - 現状、シードは未設定（後述の導入手順を参照）

---

## 1. Docker でDB/アプリを起動

```bash
# バックグラウンドで起動
docker compose up -d

# ステータス確認
docker compose ps
```

- サービス
  - `db`: Postgres 14-alpine（ポート: 5432）
  - `migrate`: `npx prisma migrate deploy` を実行するワンショット
  - `app`: アプリ本体（ポート: 9999 -> ホスト9999）

トラブルシュート:
- ポート9999競合時は、他プロセスを停止するか、`docker-compose.yml` の `ports` を変更してください。

---

## 2. Prisma マイグレーション適用

compose 起動時に `migrate` サービスが自動で `prisma migrate deploy` を実行します。手動で再実行したい場合:

```bash
# アプリコンテナ内で再適用
docker compose exec app npx prisma migrate deploy

# クライアント生成（必要に応じて）
docker compose exec app npx prisma generate
```

開発中に DB を初期化して再適用したい場合（注意: データ消えます）:

```bash
# すべてのマイグレーションをリセットして再適用（--force で確認スキップ）
docker compose exec app npx prisma migrate reset --force
```

---

## 3. Postgres へ接続（確認）

psql で DB に入ってテーブルやデータを確認できます。

```bash
# コンテナ内の psql を使用
docker compose exec -it db psql -U user -d express-tuto

# 例: テーブル一覧
\dt

# 例: ユーザー数の確認
SELECT COUNT(*) FROM "User";
```

PostgreSQL をホストのツールから直接叩く場合:

- ホスト名: `localhost`
- ポート: `5432`
- ユーザー: `user`
- パスワード: `password`
- DB名: `express-tuto`

---

## 4. シード導入（現状: 未設定）

Prisma のシードは `package.json` の `prisma.seed` にコマンドを設定し、`prisma/seed.ts` でデータ投入を実装します。

### 4.1 package.json に seed 設定を追加

```jsonc
{
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
}
```

- `ts-node` を使って TypeScript の `seed.ts` を直接実行します。
- すでに devDependencies に `ts-node` が入っている前提です。

### 4.2 `prisma/seed.ts` のサンプル

```ts
// prisma/seed.ts
import { PrismaClient } from './src/generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // 管理者ユーザー
  const adminEmail = 'admin@example.com';
  const adminPass = await bcrypt.hash('adminpass', 10);
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Admin',
      email: adminEmail,
      password: adminPass,
      isAdmin: true,
    },
  });

  // 一般ユーザー
  const userEmail = 'user@example.com';
  const userPass = await bcrypt.hash('userpass', 10);
  await prisma.user.upsert({
    where: { email: userEmail },
    update: {},
    create: {
      name: 'User',
      email: userEmail,
      password: userPass,
      isAdmin: false,
    },
  });

  // アイテム例
  await prisma.item.createMany({
    data: [
      { name: 'Item A', price: 100, content: 'A' },
      { name: 'Item B', price: 200, content: 'B' },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

> 注意: PrismaClient の import パスは本プロジェクトの `generator client` 設定で `../src/generated/prisma` になっています。seed 実行パスとの相対位置に注意してください。上の例は seed.ts と生成先の位置関係により調整が必要です。

- 例: 生成先が `prisma/src/generated/prisma` でない場合、`import { PrismaClient } from '@prisma/client'` でもOKです（`npx prisma generate` 済みが前提）。

### 4.3 シード実行

```bash
# package.json に seed を設定した場合（推奨）
docker compose exec app npx prisma db seed

# 直接 seed.ts を走らせる場合
docker compose exec app npx ts-node prisma/seed.ts
```

---

## 5. シード結果の確認

```bash
# psql で確認
docker compose exec -it db psql -U user -d express-tuto

# 例: 管理者/ユーザーの存在確認
SELECT id, email, "isAdmin" FROM "User" ORDER BY id;

# 例: アイテム確認
SELECT id, name, price FROM "Item" ORDER BY id;
```

---

## 6. E2E テスト用の .env 例（任意）

サインインE2E用に以下の環境変数を設定すると便利です（テストファイル参照）。

```bash
E2E_BASE_URL=http://localhost:9999
E2E_ADMIN_EMAIL=admin@example.com
E2E_ADMIN_PASSWORD=adminpass
E2E_USER_EMAIL=user@example.com
E2E_USER_PASSWORD=userpass
```

---

## 7. 参考

- `prisma/schema.prisma` の `datasource db` は `.env.development` の `DATABASE_URL` を参照
- compose の `migrate` サービスは `npx prisma migrate deploy` を自動実行
- 生成クライアントの出力先は `generator client.output = "../src/generated/prisma"`
