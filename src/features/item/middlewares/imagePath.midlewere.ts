import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { CustomError } from '../../../utils/errors/CustomError';

// 許可する拡張子を正規表現で定義
const imageSchema = z
	.string()
	.regex(
		/^[^.]+\.(png|jpg|jpeg|webp)$/i,
		'画像パスの形式が正しくありません。png, jpg, jpeg, webpのいずれかの拡張子を指定してください。',
	);

export const imagePath = (req: Request, res: Response, next: NextFunction) => {
	const { image } = req.body;

	try {
		// Zodでバリデーションを実行
		imageSchema.parse(image);
		next();
	} catch (error) {
		if (error instanceof z.ZodError) {
			// ZodのエラーメッセージをCustomErrorで返す
			throw new CustomError(error.message, 400);
		}
		// その他のエラー
		next(error);
	}
};
