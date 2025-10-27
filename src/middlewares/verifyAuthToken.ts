// /home/soma/workspace/express-tuto/src/middlewares/verifyAuthToken.ts
// /home/soma/workspace/express-tuto/src/middlewares/verifyAuthToken.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getJwtSecret } from '../utils/jwtUtils';
import { isJwtPayload } from '../features/auth/domain/typeguards/isJwtPayload';

export const verifyAuthToken = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return res
				.status(401)
				.json({ message: 'ヘッダーが存在しないか、Bearerで始まっていません' });
		}

		const token = authHeader.split(' ')[1];
		const secret = getJwtSecret();
		const decoded = jwt.verify(token, secret);

		if (isJwtPayload(decoded)) {
			req.user = decoded;
			return next();
		}

		return res.status(401).json({ message: 'トークンのペイロードが無効です' });
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			return res.status(401).json({ message: 'トークン期限切れ' });
		}
		if (error instanceof jwt.JsonWebTokenError) {
			return res.status(401).json({ message: 'トークンが無効です' });
		}
		return res
			.status(500)
			.json({ message: '認証中に不明なエラーが発生しました' });
	}
};
