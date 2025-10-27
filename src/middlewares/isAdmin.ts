import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/errors/CustomError';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
	const user = req.user; // req.body.user を req.user に修正
	// ユーザー情報がリクエストに含まれていることを確認
	if (!user || !user.isAdmin) {
		// 管理者でない場合は403 Forbiddenエラーを返す
		return next(new CustomError('管理者権限が必要です', 403));
	}

	// 管理者の場合は次のミドルウェアへ進む
	next();
};
