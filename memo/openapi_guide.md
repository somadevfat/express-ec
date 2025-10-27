# OpenAPI ドキュメント読み方ガイド

このドキュメントは、`docs/`ディレクトリに格納されている OpenAPI 仕様の読み方について解説します。

## 1. ディレクトリ構成

OpenAPI の仕様は、機能ごとにファイルが分割されています。

- **`docs/openapi.yml`**:

  - API 全体の定義の起点となるファイルです。
  - サーバー情報、認証方式、そして各 API エンドポイント（パス）やデータ構造（スキーマ）への参照が記述されています。

- **`docs/paths/`**:

  - 各 API エンドポイントの具体的な定義が格納されています。
  - 例えば、`/items` というエンドポイントの定義は `docs/paths/items/index.yml` に記述されています。
  - HTTP メソッド（GET, POST, PUT, DELETE など）ごとに、API の概要、パラメータ、リクエストボディ、レスポンスなどが定義されます。

- **`docs/schemas/`**:

  - API で送受信されるデータ（リクエストボディやレスポンス）の構造（スキーマ）を定義します。
  - 例えば、`User` というデータ構造は `docs/schemas/models/User.yml` で定義されています。
  - これにより、複数の API で同じデータ構造を再利用できます。

- **`docs/requests/`**:

  - 特定のリクエストボディのスキーマを定義します。`schemas` を参照することもあります。

- **`docs/responses/`**:

  - 特定のレスポンスのスキーマを定義します。`schemas` を参照することもあります。

- **`docs/params/`**:
  - URL のパスやクエリ文字列で受け取るパラメータを定義します。

## 2. `openapi.yml`の読み方

まずはじめに `openapi.yml` を確認します。

```yaml
openapi: 3.0.0
info:
  title: OpenAPI Template
  version: 1.0.0
servers:
  - url: "{server}"
    variables:
      server:
        default: http://localhost:8080/api # APIサーバーのベースURL
paths:
  /auth/signin:
    $ref: ./paths/auth/signin/index.yml # /auth/signin の定義は別ファイルを参照
  # ... 他のパス定義
components:
  schemas:
    User:
      $ref: ./schemas/models/User.yml # Userスキーマの定義は別ファイルを参照
    # ... 他のスキーマ定義
```

- `servers`: API サーバーの URL を指定します。
- `paths`: API のエンドポイントを列挙します。`$ref` は、そのエンドポイントの詳細定義が別のファイルにあることを示しています。
- `components.schemas`: API 全体で使われるデータ構造を定義します。こちらも `$ref` を使ってファイルを分割しています。

## 3. 各エンドポイント定義の読み方 (例: `paths/items/index.yml`)

次に、具体的なエンドポイントの定義ファイルを見ていきます。

```yaml
get: # HTTPメソッド
  tags:
    - items # APIのグループ名
  summary: 商品一覧 # APIの短い説明
  description: 商品一覧を取得します。 # APIの詳細な説明
  parameters: # クエリパラメータやパスパラメータ
    - $ref: ../../params/PageLimit.yml
  responses:
    "200": # HTTPステータスコード
      description: "正常応答"
      content:
        application/json:
          schema:
            $ref: ../../responses/items/ItemsResponse.yml # レスポンスのデータ構造
post:
  # ... (POSTメソッドの定義)
```

- **HTTP メソッド (`get`, `post`など)**: このブロック以下に、そのメソッドでアクセスされた際の仕様を記述します。
- **`summary`**: API の概要です。
- **`parameters`**: API が受け取るパラメータ（クエリパラメータ、パスパラメータなど）を定義します。
- **`requestBody`**: POST や PUT メソッドで受け取るリクエストボディの仕様を定義します。
- **`responses`**: API からのレスポンスを HTTP ステータスコードごとに定義します。
  - `'200'` や `'404'` などがステータスコードです。
  - `content.application/json.schema`: レスポンスボディのデータ構造を `$ref` で参照しています。

## 4. Swagger UI での確認

OpenAPI の仕様は、Swagger UI などのツールを使うことで、インタラクティブな API ドキュメントとして閲覧できます。
`docker-compose.yml` に Swagger UI の設定が含まれていれば、コンテナを起動することでブラウザから API 仕様を確認し、実際にリクエストを送信することも可能です。
