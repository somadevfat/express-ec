// 依存モジュールの読み込み
// - express: HTTPサーバ/ルーティング本体
// - cors: CORS制御（フロントからの跨ドメインアクセスを許可）
// - helmet: セキュリティヘッダ付与（XSS/CSP等の初期防御）
// - morgan: アクセスログ
// - dotenv: .env から環境変数を読み込む
// - swagger-ui-express: OpenAPIをブラウザで閲覧可能にするUI
// - path / fs: ファイルパス操作・ファイル読込
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import fs from 'fs';

// ルーティングモジュール群（ドメインごとに分割）
import userRoutes from './features/user/routes/User.routes';
import authRoutes from './features/auth/routes/Auth.routes';
import { errorHandler } from './middlewares/errorHandler';
import { itemRoutes } from './features/item/routes/Item.routes'; // 商品ドメイン
import { cartRoutes } from './features/cart/routes/Cart.route'; // カートドメイン
import myUserRoutes from './features/user/routes/MyUser.routes'; // 自分自身のユーザー情報

// 環境変数のロード
// NODE_ENVに応じて読み込む.envファイルを切り替える
// - production: .env
// - development: .env.development
// - test: .env.test
const getEnvPath = () => {
	switch (process.env.NODE_ENV) {
		case 'production':
			return '.env';
		case 'test':
			return '.env.test';
		default:
			return '.env.development';
	}
};

dotenv.config({
	path: getEnvPath(),
	override: true, // 常に上書きして、環境ごとの設定を確実に適用する
});

// Express アプリケーションのインスタンスを生成
// - server.ts から起動（listen）される
// - テストからは supertest(app) で直接利用可能
export const app = express();

// 共通ミドルウェア適用
app.use(helmet()); // セキュリティヘッダ
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '10mb' })); // JSON ボディのパース（上限10MB）
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // URLエンコードされたボディのパース
app.use(morgan('dev')); // アクセスログ出力

// Swagger UI の設定
// - ビルド時に生成された OpenAPI 仕様 (dist/openapi-merged.json) を読み込む
// - 実行時のポートに合わせて servers の base URL を差し替える
const loadOpenApiSpec = () => {
	if (process.env.NODE_ENV === 'test') {
		return null;
	}
	try {
		const specPath = path.join(__dirname, '../dist/openapi-merged.json'); // 仕様ファイルの場所
		const specContent = fs.readFileSync(specPath, 'utf8'); // 同期読み込み（起動時一度だけ）
		const spec = JSON.parse(specContent); // JSON をパース

		// サーバーURLを現在のポートに合わせて更新
		// - OpenAPI の servers[0].variables.server.default を動的に上書き
		spec.servers[0].variables.server.default = `http://localhost:${process.env.PORT || 8080}/api`;

		return spec;
	} catch (error) {
		// 仕様の読み込みに失敗してもアプリは起動を継続（/docs を無効化するだけ）
		console.error('OpenAPI仕様の読み込みに失敗:', error);
		return null;
	}
};

const openApiSpec = loadOpenApiSpec();

// Swagger UI を /docs で提供（仕様が読めた場合のみ）
if (openApiSpec) {
	app.use(
		'/docs',
		swaggerUi.serve,
		swaggerUi.setup(openApiSpec, {
			explorer: true, // エンドポイントの検索を有効化
			customCss: '.swagger-ui .topbar { display: none }', // 上部バー非表示
			customSiteTitle: 'Express API Documentation', // ブラウザタブのタイトル
		}),
	);
}

// ルーターの登録（ドメインごとに責務分離）
app.use('/api/users', userRoutes); // ユーザー管理（一覧/作成/更新 等）
app.use('/api/my/user', myUserRoutes); // 自分のユーザー情報（プロフィール等）
app.use('/api/items', itemRoutes); // 商品リソース
app.use('/api/auth', authRoutes); // 認証（ログイン/リフレッシュ/ログアウト 等）
app.use('/api/carts', cartRoutes); // カート操作（追加/削除/取得 等）

// 静的ファイル配信
// - /storage で storage/public 配下を公開（画像等の取得用途）
app.use(
	'/storage',
	express.static(path.join(process.cwd(), 'storage', 'public')),
);

// ヘルスチェック用のルート
// - 稼働確認のためにシンプルな HTML を返す
app.get('/', (req: Request, res: Response) => {
	res.send('<h1>Health Check: Server is running successfully!</h1>');
});

// エラーハンドラ（最後に配置）
// - ここより上のルート/ミドルウェアで発生した例外を集約処理
app.use(errorHandler);

export default app;
