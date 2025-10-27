import { Request, Response, NextFunction } from 'express';
import { safeValidateSignin } from '../domain/dtos/Signin.dto';
import { CustomError } from '../../../utils/errors/CustomError';

export const validateSignin = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const validationResult = safeValidateSignin(req.body);

	if (!validationResult.success) {
		throw new CustomError('入力データのバリデーションエラー', 422);
	}
	next();
};
