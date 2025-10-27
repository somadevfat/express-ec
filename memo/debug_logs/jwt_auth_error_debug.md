# 認証エラーのデバッグ記録 (2025/08/19)

## 概要
本ドキュメントは、JWT認証において発生した「トークンが無効です」というエラーのデバッグ記録と、その根本原因、および解決策をまとめたものです。

## 発生した問題
JWT認証を利用したAPI (`GET /api/users`) にアクセスした際、常に「トークンが無効です」というエラーが返された。

## デバッグの経緯と原因特定

### 1. サーバーが起動しない問題
- **現象:** `curl` が `Cannot GET /users` や `localhost:3000がいきてない` と応答。
- **原因:**
    - `package.json` の `scripts.dev` が古いファイル名 (`sarver.ts`) を参照していた。
    - `nodemon.json` の `exec` も古いファイル名 (`sarver.ts`) を参照していたため、`package.json` の修正が反映されなかった。
    - `server.ts` (旧 `sarver.ts`) の `app.listen()` の戻り値を変数に格納していなかったため、プロセスがすぐに終了していた。
- **解決策:**
    - `package.json` の `main`, `scripts.dev`, `scripts.start` を `server.ts` に修正。
    - `nodemon.json` の `exec` を `ts-node ./src/server.ts` に修正。
    - `server.ts` で `app.listen()` の戻り値を変数に格納し、`server.on('error', ...)` を追加。

### 2. 「トークンが無効です」エラーの根本原因

サーバーが起動し、トークンが発行されるにもかかわらず、APIアクセス時に「トークンが無効です」エラーが発生し続けた。

#### 2.1. 環境変数名の不一致
- **現象:** サインインで発行されたトークンが、APIアクセス時に「トークンが無効です」と判定される。
- **原因:**
    - `.env` ファイルで秘密鍵の環境変数名が `JWT_SECRET` となっていた。
    - しかし、`src/utils/jwtUtils.ts` のコードが `process.env.TOKEN_SECRET` を参照していた。
    - この不一致により、`jwtUtils.ts` は環境変数から秘密鍵を読み取れず、起動するたびにランダムな秘密鍵を生成していた。
    - 結果として、トークン発行時と検証時で異なる秘密鍵が使われていた。
- **解決策:** `src/utils/jwtUtils.ts` が参照する環境変数名を `process.env.JWT_SECRET` に修正。

#### 2.2. `req.body` が `undefined` の問題 (最終原因)
- **現象:** 秘密鍵の不一致が解消された後も、`GET /api/users` アクセス時に「トークンが無効です」エラーが発生し、サーバーログに `Cannot set properties of undefined (setting 'user')` と表示された。
- **原因:**
    - `src/middlewares/verifyAuthToken.ts` で、デコードしたユーザー情報を `req.body.user` に代入しようとしていた。
    - `GET` リクエストにはリクエストボディがないため、`req.body` は `undefined` であり、`undefined` のプロパティに値を代入しようとしてエラーが発生していた。
    - このエラーが `jwt.verify` の `try-catch` ブロック内で発生していたため、クライアントには「トークンが無効です」という汎用的なエラーが返されていた。
- **解決策:**
    - `req.body.user = decoded;` を `req.user = decoded;` に修正。
    - `any` や `as` を使わない型安全な実装のため、以下のリファクタリングを実施。
        - `src/features/auth/domain/interfaces/JwtPayload.interface.ts` に `JwtPayload` インターフェースを切り出し。
        - `src/features/auth/domain/typeguards/isJwtPayload.ts` に `isJwtPayload` 型ガード関数を定義。
        - `src/types/express/index.d.ts` で Express の `Request` オブジェクトを拡張し、`req.user` を型安全に定義。
        - `src/middlewares/verifyAuthToken.ts` で `jwt.verify` の結果を `unknown` で受け取り、型ガードでチェックし、`req.user` に代入するように修正。

## 結論
今回のデバッグを通じて、JWT認証のライフサイクルにおける各段階でのエラー発生ポイントと、TypeScriptにおける型安全な実装の重要性を再確認することができました。
