一言で言うと機密でないuserスキーマを定義！

## User.tsスキーマの解説

### 1. **データベースマイグレーションに基づく設計**

```sql
-- 実際のテーブル構造
CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    email_verified_at TIMESTAMP NULL,
    password VARCHAR(255) NULL,
    is_admin BOOLEAN NULL,
    remember_token VARCHAR(100) NULL,
    email_reissue_token VARCHAR(64) NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    created_by BIGINT NULL,
    updated_by BIGINT NULL
);
```

### 2. **Laravelモデルの設定による制約**

```php
// User.php
protected $hidden = [
    'password',           // APIレスポンスから除外
    'remember_token',     // APIレスポンスから除外
    'emailReissueToken',  // APIレスポンスから除外
];

protected $casts = [
    'is_admin' => 'boolean',  // boolean型にキャスト
];
```

### 3. **BaseModelの動作**

```php
// BaseModel.php
protected function serializeDate(DateTimeInterface $date) {
    return $date->format('Y-m-d H:i:s');  // 日時は文字列として返される
}

public function save(array $options = [], bool $isBy = true) {
    if ($isBy) {
        $this->created_by = Auth::id();  // 自動設定
        $this->updated_by = Auth::id();  // 自動設定
    }
}
```

### 4. **TypeScriptスキーマの各フィールド解説**

```typescript
export interface User {
  id: number;                    // プライマリキー
  email: string;                 // 必須、ユニーク
  emailVerifiedAt?: string | null;  // メール認証日時（nullable）
  emailReissueToken?: string | null; // パスワードリセットトークン（hidden）
  isAdmin: boolean | null;       // 管理者フラグ（nullable、booleanキャスト）
  createdAt: string;             // 作成日時（文字列形式）
  updatedAt: string;             // 更新日時（文字列形式）
  createdBy: number | null;      // 作成者ID（nullable、自動設定）
  updatedBy: number | null;      // 更新者ID（nullable、自動設定）
}
```

### 5. **OpenAPIドキュメントとの不一致**

**OpenAPIの問題点:**
- `status`フィールドが`required`に含まれているが、データベースに存在しない
- `isAdmin`が`required`だが、実際は`nullable`
- `createdBy`、`updatedBy`が`required`だが、実際は`nullable`

**TypeScriptスキーマは実際のLaravel実装に基づいて正しく定義されています。**


