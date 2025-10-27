# express-ts-auth

Express + TypeScript + Prisma（PostgreSQL）

## 必要なもの
- Docker / Docker Compose

## 起動
```
docker compose up -d --build
```

起動順は自動です（db → migrate → app）。migrate は `docker-compose.yml` の `migrate` サービスで自動実行されます。

## 手動でマイグレーションしたい場合（任意）
```
docker compose run --rm app npx prisma migrate deploy
```

## アクセス
- アプリ: http://localhost:9999/
- Swagger: http://localhost:9999/docs

## メモ
- `version: "3.8"` の警告が出る場合は、`docker-compose.yml` の該当行を削除してください
- 画像保存先: `storage/public/`

## よくあるハマり
- ポート競合したら `.env.development` の `PORT` を変更（例: 8081）
  - `docker-compose.yml` の `ports` も合わせて（例: `8081:8081`）
- JWT_SECRET が短いと警告が出ます。32文字以上推奨

## 開発用コマンド（任意）
- ローカルで動かす派（Docker 使わない）:
  ```bash
  npm ci
  npm run dev
  ```

# express-ec
