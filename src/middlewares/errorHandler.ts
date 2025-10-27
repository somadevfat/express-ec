import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { CustomError } from '../utils/errors/CustomError';

export const errorHandler = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	console.error('Error occurred:', error);

	// Zodバリデーションエラーの処理
	if (error instanceof ZodError) {
		return res.status(422).json({
			message: '入力データのバリデーションエラー',
			errors: error.flatten(),
		});
	}

	// カスタムエラーの処理
	if (error instanceof CustomError) {
		return res.status(error.statusCode).json({
			message: error.message,
			statusCode: error.statusCode,
		});
	}

	// その他の予期しないエラーの処理
	return res.status(500).json({
		message: 'サーバー内部でエラーが発生しました',
		statusCode: 500,
	});
};
