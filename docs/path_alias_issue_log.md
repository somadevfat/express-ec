# パスエイリアスの不具合に関するレポート

## 1. 問題の概要

`npm run dev` コマンドを実行した際に、`tsconfig.json`で設定したパスエイリアス（例: `@/features/...`）が解決されず、`Error: Cannot find module` というエラーが発生していました。

## 2. 原因

この問題は、`nodemon`と`ts-node`の連携設定に起因していました。

`package.json`の`dev`スクリプトでは、`nodemon`の引数として`-r tsconfig-paths/register`を指定していましたが、`nodemon.json`の`exec`設定によって実際に実行される`ts-node`コマンドには、その引数が渡されていませんでした。

**修正前の設定:**

*   `package.json`:
    ```json
    "scripts": {
      "dev": "nodemon -r tsconfig-paths/register src/server.ts"
    }
    ```

*   `nodemon.json`:
    ```json
    {
      "exec": "ts-node ./src/server.ts"
    }
    ```

この設定では、`nodemon`は`tsconfig-paths/register`を自身のプロセスで読み込もうとしますが、コードを直接実行する`ts-node`のプロセスにはその設定が引き継がれないため、パスエイリアスを解決できませんでした。

## 3. 解決策

`nodemon`から`ts-node`を呼び出す際に、`ts-node`の`-r`（`--require`）オプションとして`tsconfig-paths/register`を直接指定するように修正しました。

具体的には、`nodemon.json`の`exec`コマンドを以下のように変更しました。これにより、`nodemon`の設定は`nodemon.json`に集約され、`package.json`のスクリプトはシンプルになります。

**修正後の設定:**

*   `nodemon.json`:
    ```json
    {
      "exec": "ts-node -r tsconfig-paths/register src/server.ts"
    }
    ```

*   `package.json`:
    ```json
    "scripts": {
      "dev": "nodemon"
    }
    ```

## 4. 結論

この修正により、`ts-node`が起動する際に`tsconfig-paths`モジュールを読み込み、`tsconfig.json`で定義されたパスエイリアスを正しく解釈できるようになりました。その結果、モジュールが見つからないというエラーは解消されました。
