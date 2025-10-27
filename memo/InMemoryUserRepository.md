インメモリ用オブジェくデータを入れておく

実装クラスで抽象メソッドを実装

idを比較してnullかどうか見る

## async無し実装（同期処理）

```typescript
// 同期処理版
findById(id: number): User | null {
  // 即座に結果を返す
  return this.currentUsers.id === id ? this.currentUsers : null;
}

// 使用例
const user = repo.findById(1); // 即座に結果が返る
console.log(user); // Userオブジェクトまたはnull
```

## asyncあり実装（非同期処理）

```typescript
// 非同期処理版
async findById(id: number): Promise<User | null> {
  // 時間がかかる処理を想定
  return this.currentUsers.id === id ? this.currentUsers : null;
}

// 使用例
const user = await repo.findById(1); // 結果を待つ
console.log(user); // Userオブジェクトまたはnull
```

## Promiseの3つの状態

```typescript
Promise<User | null>
├── pending   (処理中)     ← まだ結果が決まっていない
├── fulfilled (成功)       ← User型またはnull
└── rejected  (失敗)       ← Error型
```

## 実際の違い

```typescript
// 同期処理（即座に結果）
const user = repo.findById(1);
// userの型: User | null

// 非同期処理（結果を待つ）
const user = await repo.findById(1);
// userの型: User | null（Promiseが解決された後）
```