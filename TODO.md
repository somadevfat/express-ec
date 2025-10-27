# TODO (OpenAPI優先)

## 概要サマリー
- OpenAPIをソースオブトゥルースとして整合させる。
- 重要差分:
  - ルーティング: `GET /my/user` は `/api` 直下に配置すべき。実装は `/api/users/my/user` になっている。
  - Users: `/my/user` は `findMe` を返すべき。実装は `findById` を呼んでいる。
  - Items: POSTボディ/レスポンス/削除コード/一覧ページネーションが仕様と不一致。
  - Carts: POSTボディ（配列）/レスポンス（`item`同梱）/不要な追加エンドポイントが仕様と不一致。
  - OpenAPI側の誤記: `ItemResponse.yml` 構文、`ItemsResponse.yml` の title、`ItemId.yml` の name/説明、`Item.yml` required の綴り。

## 実装側の修正（仕様に合わせる）
1. ルーティング統合[x]
   - `app.ts`: `userRoutes` のマウントを見直し、`/api/my/user` を正しい位置へ。
   - `User.routes.ts`: `GET /my/user` は `userController.findMe` に差し替え。
2. Items API []
   - `POST /items`: DTO/コントローラを `base64`+`extension` 受付に変更。201→200に統一。
   - `GET /items`: サービス/レスポンスをページネーション形式 `{ ...pagination, data: Item[] }` に変更。
   - `GET /items/{itemId}`: 返却形状は `Item` 単体（仕様修正も併行）。
   - `DELETE /items/{itemId}`: 200へ揃える（またはOpenAPIを204へ変更）。
3. Carts API []
   - `POST /carts`: ボディを配列 `[{ item_id, quantity }]` 受付に変更し、複数作成に対応。
   - `GET /carts`: リポジトリで `include: { item: true }` を追加し、`item` をネストして返却。
   - 仕様にない `GET /carts/:id`, `PUT /carts/:id` は削除するか、必要ならOpenAPIへ追記（今回は削除）。

## OpenAPIドキュメント側の修正（誤記訂正）
1. `docs/responses/items/ItemResponse.yml`: `properties` 下の `$ref` を正しい構造へ修正。
2. `docs/responses/items/ItemsResponse.yml`: `title` を `ItemsResponse` に修正。
3. `docs/params/ItemId.yml`: `name` を `itemId` に、説明を「商品ID」に修正。
4. `docs/schemas/models/Item.yml`: required の `contents` を `content` に修正。

## メモ（認証/認可）
- OpenAPIはグローバルでBearerを要求。`/carts` の管理者制約は仕様にないため、実装の `isAdmin` は削除済み（仕様に合わせて整合）。

## 実行順（作業手順）
1. Users: ルート位置/ハンドラ差替え
2. Items: DTO/Controller/Serviceの入出力修正とHTTPコード調整
3. Carts: DTO/Controller/Repositoryの入出力修正と余剰エンドポイント削除
4. OpenAPIの誤記修正
5. Swagger UIで目視確認、最低限の結合テスト実行