# Postman用リクエスト集

`curl`でのテストがうまくいかない場合、こちらの手順でPostmanをお試しください。

## 準備：Postmanの環境変数を設定する

Postmanの環境(Environment)に以下の変数を設定しておくと、トークンやURLの管理が楽になります。

1.  `baseUrl`: `http://localhost:3000`
2.  `adminToken`: (最初は空でOK。管理者ログイン後に設定します)
3.  `itemId`: (最初は空でOK。アイテム作成後に設定します)

---

## 1. 🔑 管理者ログイン (Admin Login)

まず、このリクエストを実行して管理者用のトークンを取得します。

- **Method**: `POST`
- **URL**: `{{baseUrl}}/auth/admin/signin`
- **Body**: `raw (JSON)`

```json
{
  "email": "admin@example.com",
  "password": "AdminPass123"
}
```

**実行後**: レスポンスボディの `token` の値をコピーし、環境変数 `adminToken` にペーストしてください。

---

## 2. 🛍️ アイテム (Items) CRUD操作

ここからのリクエストでは、`Authorization` ヘッダーに `Bearer {{adminToken}}` を設定してください。

### ✨ アイテム作成 (Create Item)

- **Method**: `POST`
- **URL**: `{{baseUrl}}/items`
- **Headers**:
  - `Authorization`: `Bearer {{adminToken}}`
- **Body**: `raw (JSON)`

```json
{
  "name": "すごいキーボード",
  "price": 15000,
  "description": "とても打ちやすい、最高のキーボードです。",
  "image_url": "http://example.com/keyboard.jpg"
}
```

**実行後**: レスポンスボディの `id` の値をコピーし、環境変数 `itemId` にペーストしてください。

### 📚 全アイテム取得 (Get All Items)

- **Method**: `GET`
- **URL**: `{{baseUrl}}/items`
- **Headers**:
  - `Authorization`: `Bearer {{adminToken}}`

### 🎯 特定アイテム取得 (Get Item by ID)

- **Method**: `GET`
- **URL**: `{{baseUrl}}/items/{{itemId}}`
- **Headers**:
  - `Authorization`: `Bearer {{adminToken}}`

### 🔄 アイテム更新 (Update Item)

- **Method**: `PUT`
- **URL**: `{{baseUrl}}/items/{{itemId}}`
- **Headers**:
  - `Authorization`: `Bearer {{adminToken}}`
- **Body**: `raw (JSON)`

```json
{
  "name": "もっとすごいキーボード",
  "price": 20000,
  "description": "人間工学に基づいた、究極のキーボード。",
  "image_url": "http://example.com/keyboard_v2.jpg"
}
```

### 🗑️ アイテム削除 (Delete Item)

- **Method**: `DELETE`
- **URL**: `{{baseUrl}}/items/{{itemId}}`
- **Headers**:
  - `Authorization`: `Bearer {{adminToken}}`

---

## 3. 🚪 ログアウト

- **Method**: `POST`
- **URL**: `{{baseUrl}}/auth/logout`
- **Headers**:
  - `Authorization`: `Bearer {{adminToken}}`
