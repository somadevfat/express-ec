export class CustomError extends Error {
	public readonly statusCode: number;
	public readonly isOperational: boolean;

	constructor(
		message: string,
		statusCode: number = 500,
		isOperational: boolean = true,
	) {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = isOperational;

		// Errorクラスのスタックトレースを正しく設定
		Error.captureStackTrace(this, this.constructor);
	}
}
// バリデーションエラーやその他のカスタムエラーを定義するためのクラスを追加します。
export class ValidationError extends CustomError {
	constructor(message: string) {
		super(message, 422);
	}
}
// 404 Not Foundエラーを定義 ファイルなどがない場合に使用
export class NotFoundError extends CustomError {
	constructor(message: string) {
		super(message, 404);
	}
}
// データ競合エラー データが競合した場合に使用
export class ConflictError extends CustomError {
	constructor(message: string) {
		super(message, 409);
	}
}
// 認証エラー 401 Unauthorizedを表すクラス 認証が必要な場合に使用
export class UnauthorizedError extends CustomError {
	constructor(message: string) {
		super(message, 401);
	}
}
// リクエストが不正な場合に使用する400 Bad Requestエラーを定義
export class BadRequestError extends CustomError {
	constructor(message: string) {
		super(message, 400);
	}
}
// サーバー内部エラー 500 Internal Server Errorを表すクラス
export class InternalServerError extends CustomError {
	constructor(message: string) {
		super(message, 500);
	}
}
// Forbiddenエラー 403 Forbiddenを表すクラス アクセス権限がない場合に使用
export class ForbiddenError extends CustomError {
	constructor(message: string) {
		super(message, 403);
	}
}
