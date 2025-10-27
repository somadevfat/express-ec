// /home/soma/workspace/express-tuto/src/startup.ts
import { getJwtSecret, isJwtSecretCache } from './utils/jwtUtils'; // isJwtSecretCached を isJwtSecretCache に修正

export function initializeJwtSecret(): void {
	try {
		const secret = getJwtSecret();
		console.log(`✅ JWT秘密鍵の初期化に成功（長さ: ${secret.length}文字）`);

		// キャッシュの確認
		if (isJwtSecretCache()) {
			// isJwtSecretCached を isJwtSecretCache に修正
			console.log('✅ JWT秘密鍵がメモリにキャッシュされました');
		}
	} catch (error: unknown) {
		console.error('❌ JWT秘密鍵の初期化に失敗');

		// エラーオブジェクトの型安全な処理
		if (error instanceof Error) {
			console.error(error.message);
		} else {
			console.error('不明なエラーが発生しました');
		}

		if (process.env.NODE_ENV === 'production') {
			console.error('本番環境のため、アプリケーションを終了します');
			process.exit(1);
		} else {
			console.warn('⚠️ 開発環境のため、処理を続行します');
		}
	}
}
