import app from './app';
import { initializeJwtSecret } from './startup';

const port = process.env.PORT || 8080;

// アプリケーション起動時の初期化処理
initializeJwtSecret();

const server = app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// サーバーエラーのハンドリング
server.on('error', (error) => {
	console.error('Server error:', error);
	process.exit(1);
});
