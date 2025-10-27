# 最小構成の Node 公式イメージ
FROM node:20-alpine

# Install openssl for Prisma
RUN apk add --no-cache openssl

# 作業ディレクトリ
WORKDIR /app

# 依存関係のインストール（package*.json だけを先にコピーしてキャッシュ活用）
COPY package*.json ./

# devDependencies も含めてインストール（TypeScript ビルドに必要）
RUN npm ci

# 残りのソースをコピー
COPY . .

# Prisma Client を生成（DB への接続は不要、環境変数は文字列として参照されるだけ）
RUN echo "Force Prisma generate"
RUN npx prisma generate

# ビルド（dist/ を作成し、openapi-merged.json も生成）
RUN npm run build

# 生成された Prisma Client を dist 配下にコピー（実行時参照先 ../generated/prisma に合わせる）
RUN mkdir -p dist/generated && cp -r src/generated/prisma dist/generated/prisma

# tsconfig-paths を dist 向けに登録する実行時ブートストラップを作成
RUN printf "const path=require('path');require('tsconfig-paths').register({ baseUrl: path.join(__dirname,'dist'), paths: { '@/*': ['*'] } });" > tsconfig-paths-bootstrap.cjs

# ポート公開
EXPOSE 8080

# 本番起動（tsconfig-paths のブートストラップを噛ませて dist/server.js を実行）
CMD ["node", "-r", "./tsconfig-paths-bootstrap.cjs", "dist/server.js"]
