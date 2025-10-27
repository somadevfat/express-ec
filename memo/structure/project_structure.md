# プロジェクト構成ガイド

## 0. ディレクトリ構成図 (Tree)

```
.
├── .gitignore
├── docker-compose.yml
├── nodemon.json
├── package.json
├── tsconfig.json
├── docs
│   ├── openapi.yml
│   ├── params
│   ├── paths
│   ├── requests
│   ├── responses
│   └── schemas
├── memo
│   ├── openapi_guide.md
│   └── requirements
│       └── backend_spec.md
├── prisma
│   ├── migrations
│   └── schema.prisma
├── Rest.cliant
│   └── User.rest
└── src
    ├── app.ts
    ├── sarver.ts
    ├── features
    │   └── user
    │       ├── controllers
    │       ├── domain
    │       ├── infrastructure
    │       ├── repositories
    │       ├── routes
    │       └── services
    └── utils
```

このドキュメントは、AI アシスタントがプロジェクトの全体像を把握するために、現在のディレクトリ構成と各ファイルの役割を説明するものです。

## 1. ルートディレクトリ

プロジェクトのルートには、設定ファイルや主要なディレクトリが配置されています。

- **`.gitignore`**: Git でバージョン管理しないファイルを指定します。
- **`docker-compose.yml`**: Docker コンテナ（アプリケーション、データベース等）の構成を定義します。
- **`package.json`**: プロジェクトの情報、依存パッケージ、スクリプト（`npm run dev`など）を定義します。
- **`tsconfig.json`**: TypeScript のコンパイラオプションを設定します。
- **`nodemon.json`**: `nodemon`による開発サーバーの自動リロード設定です。

## 2. ソースコード (`src/`)

アプリケーションのメインとなるソースコードが格納されています。TypeScript で記述されています。

- **`src/app.ts`**: Express アプリケーションのインスタンス生成や、ミドルウェアの設定など、アプリケーション全体のセットアップを行います。
- **`src/server.ts`**: `app.ts`で作成したアプリケーションを起動し、サーバーを立ち上げるエントリーポイントです。
- **`src/features/`**: アプリケーションの主要な機能（ドメイン）ごとにモジュールが分割されています。
  - **`src/features/user/`**: ユーザー関連機能のモジュールです。
    - **`controllers/`**: HTTP リクエストを受け取り、レスポンスを返す責務を持ちます。（例: `User.controller.ts`）
    - **`services/`**: ビジネスロジックを担当します。（例: `User.service.ts`）
    - **`routes/`**: 特定のパスへのリクエストをどのコントローラにルーティングするかを定義します。（例: `User.routes.ts`）
    - **`domain/`**: ドメインモデル（エンティティや DTO）を定義します。
    - **`repositories/`**: データベースとのインターフェースを定義します。
    - **`infrastructure/repositories/`**: `repositories`で定義したインターフェースの具体的な実装（Prisma やインメモリ）を記述します。
- **`src/utils/`**: プロジェクト全体で再利用されるユーティリティ関数などを格納します。

## 3. API ドキュメント (`docs/`)

OpenAPI (Swagger) を用いた API 仕様書が格納されています。詳細は `memo/openapi_guide.md` を参照してください。

- **`docs/openapi.yml`**: API 仕様の起点となるファイルです。
- **`docs/paths/`**: 各エンドポイントの定義。
- **`docs/schemas/`**: データ構造の定義。

## 4. データベース (`prisma/`)

Prisma ORM に関するファイルが格納されています。

- **`prisma/schema.prisma`**: データベースのスキーマ（テーブル、カラム、リレーションなど）を定義します。
- **`prisma/migrations/`**: データベーススキーマの変更履歴（マイグレーションファイル）が格納されます。

## 5. テスト・クライアント (`Rest.cliant/`)

REST Client (VSCode 拡張機能) を使って API をテストするためのファイルが格納されています。

- **`Rest.cliant/User.rest`**: ユーザー関連 API のエンドポイントをテストするためのリクエストを記述しています。

## 6. ドキュメント・メモ (`memo/`)

開発中のメモや、今回作成した仕様書などが格納されています。

- **`memo/requirements/backend_spec.md`**: フロントエンド要件に基づき作成したバックエンド API 仕様書です。
- **`memo/openapi_guide.md`**: OpenAPI ドキュメントの読み方ガイドです。
- その他、開発過程で作成された技術的なメモ。
