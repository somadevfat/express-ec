# 依存性注入（DI）について

## 1. はじまり：このコードは何？

```typescript
export class UserUsecase {
  constructor(private readonly userRepository: IUserRepository) {}
  // ...
}
```

このコードの`constructor`は、`UserUsecase`クラスのインスタンスを生成する際に、外部から`IUserRepository`という「ルール（インターフェース）」に適合したオブジェクトを受け取るためのものです。

- **これはインスタンス化ではありません**：`new`を使って新しいオブジェクトを作っているわけではありません。
- **依存性の宣言**：`UserUsecase`クラスは機能するために`IUserRepository`が必要ですよ、と宣言しています。
- **TypeScript の便利な機能**：コンストラクタの引数に`private`や`readonly`をつけると、その引数は自動的にクラスのプロパティとして定義されます。つまり、以下のコードと同じ意味になります。

  ```typescript
  export class UserUsecase {
    private readonly userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
      this.userRepository = userRepository;
    }
    // ...
  }
  ```

## 2. DI の核心：「あとから注入する」という考え方

DI のイメージは**「クラスの中で部品を直接作るのではなく、外から与えてもらう（注入してもらう）」**と考えると非常に分かりやすいです。

### DI を使わない場合（密結合）

```typescript
import { UserRepository } from "../../infrastructure/database/userRepository"; // ← 具体的な実装に依存

export class UserUsecase {
  private readonly userRepository: UserRepository;

  constructor() {
    // 自分自身でUserRepositoryのインスタンスを生成している
    this.userRepository = new UserRepository();
  }
  // ...
}
```

- **問題点**：`UserUsecase`が`UserRepository`という具体的な実装を**知ってしまっている**状態です。これを「密結合」と呼びます。
- **なぜ問題か**：もしテストのためにダミーの DB を使いたくなったり、DB を MySQL から PostgreSQL に変更したくなったりした場合、`UserUsecase`クラス自体のコードを**修正する必要**が出てきてしまいます。

### DI を使う場合（疎結合）

```typescript
import { IUserRepository } from "../../domain/repositories/userRepository"; // ← ルール(インターフェース)にのみ依存

export class UserUsecase {
  // コンストラクタで受け取るだけ。中身が何かは知らない。
  constructor(private readonly userRepository: IUserRepository) {}
  // ...
}

// --- どこか別の場所（DIコンテナやアプリケーションの起動処理など） ---
import { UserUsecase } from "./application/usecases/userUsecase";
import { UserRepository } from "./infrastructure/database/userRepository";
import { MockUserRepository } from "./infrastructure/test/mockUserRepository";

// 本番環境では、実際のDBリポジトリを"注入"する
const userRepository = new UserRepository();
const userUsecase = new UserUsecase(userRepository);

// テストのときは、偽物のリポジトリを"注入"する
const mockRepository = new MockUserRepository();
const userUsecaseForTest = new UserUsecase(mockRepository);
```

- **メリット**：`UserUsecase`は`IUserRepository`という**ルール**さえ守っていれば、どんなオブジェクトが渡されても気にしません。これを「疎結合」と呼びます。
- **結果**：部品（`UserRepository`）の交換が容易になり、柔軟性、保守性、そしてテストのしやすさが格段に向上します。

## 3. 究極の例え：「関数の引数」

> **「まさに関数の引数みたいなもので何回も使い回せるってことね。呼び出しの引数だけ変えるだけで」**

このご理解は完璧です。

```typescript
// この関数は、渡されるオブジェクトが { label: string } というルールさえ守っていれば
// それが何から作られたものかは気にしない。
function printLabel(labelData: { label: string }) {
  console.log(labelData.label);
}

const product = { name: "Apple", label: "A" };
const user = { id: 1, label: "User-1" };

// 引数を変えるだけで、関数本体はそのまま使い回せる
printLabel(product); // "A"
printLabel(user); // "User-1"
```

`UserUsecase`クラスも`printLabel`関数と同じです。
コンストラクタの引数（`IUserRepository`）というルールさえ守っていれば、呼び出し側（DI コンテナなど）が渡すオブジェクトを差し替えるだけで、`UserUsecase`本体のコードを一切変更することなく、その振る舞いを変更できるのです。

## まとめ

依存性注入（DI）は、クラス間の依存関係を疎（そ）にして、柔軟でテストしやすく、変更に強いアプリケーションを作るための非常に強力な設計パターンです。
