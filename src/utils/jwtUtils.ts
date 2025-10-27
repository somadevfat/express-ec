import crypto from 'crypto';

// メモリキャッシュ用の変数
let jwtSecretCache: string | null = null;

export function getJwtSecret(): string {
	console.log('\n--- getJwtSecret called ---');

	// キャッシュがあればそれを返す
	if (jwtSecretCache !== null) {
		console.log('✅ Returning cached secret.');
		return jwtSecretCache;
	}

	console.log('🤔 Cache is empty. Trying to read from .env file...');
	const envSecret = process.env.JWT_SECRET;

	if (envSecret) {
		console.log('✅ Found JWT_SECRET in .env file.');
		if (envSecret.length < 32) {
			console.warn('⚠️ Warning: JWT_SECRET is too short.');
		}
		jwtSecretCache = envSecret;
		console.log('   Caching the secret from .env file.');
		return jwtSecretCache;
	} else {
		console.error('❌ ERROR: JWT_SECRET not found in .env file!');
		const generatedSecret = crypto.randomBytes(32).toString('hex');
		console.warn(`   Generating a temporary random secret: ${generatedSecret}`);
		jwtSecretCache = generatedSecret;
		return jwtSecretCache;
	}
}

// キャッシュをクリアする関数（テスト用）
export function clearJwtSecretCache(): void {
	jwtSecretCache = null;
}

// キャッシュの状態を確認する関数（デバッグ用）
export function isJwtSecretCache(): boolean {
	return jwtSecretCache !== null;
}
