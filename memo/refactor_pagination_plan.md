# アイテム一覧取得API レスポンス修正計画

## 1. 目的

`GET /api/items` エンドポイントのレスポンスを、現在のアイテム配列の直接返却から、設計書に記載されているページネーション情報（総数、現在のページなど）を含むオブジェクト形式に修正する。

**現在のレスポンス形式:**
```json
[
  { "id": 1, "name": "..." },
  { "id": 2, "name": "..." }
]
```

**目標とするレスポンス形式:**
```json
{
  "total": 100,
  "perPage": 10,
  "currentPage": 1,
  "lastPage": 10,
  "from": 1,
  "to": 10,
  "nextPageUrl": "/api/items?page=2&limit=10",
  "prevPageUrl": null,
  "path": "/api/items",
  "data": [
    { "id": 1, "name": "..." },
    { "id": 2, "name": "..." }
  ]
}
```

## 2. 影響範囲（修正対象ファイル）

- `src/features/item/infrastructure/repositories/Item.repository.prisma.ts`
- `src/features/item/services/Item.service.ts`
- `src/features/item/controllers/Item.controller.ts`
- `src/features/item/domain/types/` (新しい型定義ファイルを追加)

## 3. 作業手順

### Step 1: 新しい型定義の作成

ページネーションされたレスポンスのための型定義ファイルを作成する。

- **ファイル:** `src/features/item/domain/types/PaginatedItemsResponse.ts` (新規作成)
- **内容:** `total`, `currentPage`, `data` など、目標とするレスポンス形式に合わせた `interface` または `type` を定義する。

### Step 2: リポジトリ層の修正 (`Item.repository.prisma.ts`)

`findAll` メソッドを修正し、アイテムのリストと総件数を同時に返すように変更する。

- `findMany` と `count` を Prisma の `$transaction` を使ってアトミックに実行する。
- 戻り値を、 `{ items: Item[], total: number }` という形式のオブジェクトに変更する。

### Step 3: サービス層の修正 (`Item.service.ts`)

`findAll` メソッドを修正し、ページネーションロジックを実装する。

- リポジトリから `{ items, total }` を受け取る。
- `total`, `limit`, `page` の値から、`currentPage`, `lastPage`, `nextPageUrl`, `prevPageUrl` などのメタデータを計算する。
- Step 1 で定義した `PaginatedItemsResponse` 型のオブジェクトを構築し、コントローラーに返す。

### Step 4: コントローラー層の確認 (`Item.controller.ts`)

`getAllItems` メソッドを確認する。

- サービスから返却されたページネーションオブジェクトを、そのまま `res.status(200).json()` でクライアントに返す。
- 基本的に修正は不要な見込み。

