import { Request, Response, NextFunction } from 'express';
import { safeValidateCreateUser } from '../domain/dtos/CreateUser.dto';
import { safeValidateUpdateUser } from '../domain/dtos/UpdateUser.dto';
import { CustomError } from '../../../utils/errors/CustomError';

export const validateCreateUser = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const validationResult = safeValidateCreateUser(req.body);

	if (!validationResult.success) {
		throw new CustomError('入力データのバリデーションエラー', 422);
	}
	next();
};

export const validateUpdateUser = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const validationResult = safeValidateUpdateUser(req.body);

	if (!validationResult.success) {
		throw new CustomError('入力データのバリデーションエラー', 422);
	}
	next();
};
