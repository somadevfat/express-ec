# 総合テストスクリプト

# 1. 🔑 管理者としてログインし、トークンを取得

set -euo pipefail
BASE_URL=${BASE_URL:-http://localhost:3000}

TOKEN=$(curl -s -X POST -H "Content-Type: application/json" -d '{"email": "admin@example.com", "password": "AdminPass123"}' "$BASE_URL/api/auth/admin/signin" | jq -r '.token // empty')
echo "--- 🎫 取得したトークン ---"
echo "$TOKEN"
echo ""

# トークン取得に失敗した場合は終了
if [ -z "$TOKEN" ] || [ "$TOKEN" = "null" ]; then
  echo "❌ ログインに失敗しました。メール/パスワードとサーバー状態を確認してください。"
  exit 1
fi

# 2. 🛍️ アイテムの CRUD 操作

echo "--- ✨ 2.1. アイテムの作成 ---"

# 作成したアイテムの ID を `ITEM_ID` 変数に保存

CREATE_RESP=$(curl -s -X POST "$BASE_URL/api/items" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"name": "すごいキーボード", "price": 15000, "content": "とても打ちやすい、最高のキーボードです。", "image": "http://example.com/keyboard.jpg"}')
ITEM_ID=$(echo "$CREATE_RESP" | jq -r '.id // empty')
if [ -z "$ITEM_ID" ] || [ "$ITEM_ID" = "null" ]; then 
  echo "❌ 作成失敗"; echo "$CREATE_RESP"; exit 1; 
fi
echo "🆔 作成されたアイテム ID: $ITEM_ID"
echo ""

echo "--- 📚 2.2. 全アイテムの取得（作成後） ---"
curl -s -X GET -H "Authorization: Bearer $TOKEN" "$BASE_URL/api/items"
echo ""
echo ""

echo "--- 🎯 2.3. 特定アイテムの取得 ---"
curl -s -X GET -H "Authorization: Bearer $TOKEN" "$BASE_URL/api/items/$ITEM_ID"
echo ""
echo ""

echo "--- 🔄 2.4. アイテムの更新 ---"
UPDATE_RESP=$(curl -s -X PUT "$BASE_URL/api/items/$ITEM_ID" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"name": "もっとすごいキーボード", "price": 20000, "content": "人間工学に基づいた、究極のキーボード。", "image": "http://example.com/keyboard_v2.jpg"}')
echo "$UPDATE_RESP"
echo ""
echo ""

echo "--- 🎯 2.5. 特定アイテムの取得（更新後） ---"
curl -s -X GET -H "Authorization: Bearer $TOKEN" "$BASE_URL/api/items/$ITEM_ID"
echo ""
echo ""

echo "--- 🗑️ 2.6. アイテムの削除 ---"
curl -s -X DELETE -H "Authorization: Bearer $TOKEN" "$BASE_URL/api/items/$ITEM_ID"
echo ""
echo ""

echo "--- 📚 2.7. 全アイテムの取得（削除後） ---"
curl -s -X GET -H "Authorization: Bearer $TOKEN" "$BASE_URL/api/items"
echo ""
echo ""

# 3. 🚪 ログアウト処理

echo "--- 🚪 3. ログアウト処理 ---"
LOGOUT_RESP=$(curl -s -X POST -H "Authorization: Bearer $TOKEN" "$BASE_URL/api/auth/logout")
echo "$LOGOUT_RESP"
echo ""
echo ""

# 4. 💀 ログアウト後のアクセス試行

echo "--- 💀 4. ログアウト後の API アクセス（アイテム取得） ---"
echo "(期待結果: 401 Unauthorized。ブロックリストによりトークンが拒否されるはず)"
AFTER_LOGOUT_RESP=$(curl -s -X POST "$BASE_URL/api/items" -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"name": "ログアウト後は失敗するはずのアイテム", "price": 999, "content": "このリクエストは401で拒否されることを確認するためのものです。", "image": "http://example.com/should-fail.jpg"}')
echo "$AFTER_LOGOUT_RESP"
echo "✅ ログアウト後のリクエストは適切に401となりました"
