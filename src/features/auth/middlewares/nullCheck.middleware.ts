import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../../utils/errors/CustomError';

// bodyが{}以外は弾く
export const nullCheckMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (req.body === null || typeof req.body !== `object`) {
		throw new CustomError(
			'bodyにstringでおくってないか？ {}にしてください',
			400,
		);
	}
	next();
};
