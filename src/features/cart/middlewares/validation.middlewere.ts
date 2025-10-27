import { Request, Response, NextFunction } from 'express';
import { safeValidateCreateCart } from '../domain/dtos/CreateCart.dto';
import { safeValidateUpdateCart } from '../domain/dtos/UpdateCart.dto';
import { CustomError } from '../../../utils/errors/CustomError';

export const validateCreateCart = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const validationResult = safeValidateCreateCart(req.body);

	if (!validationResult.success) {
		throw new CustomError('入力データのバリデーションエラー', 422);
	}
	next();
};

export const validateUpdateCart = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const validationResult = safeValidateUpdateCart(req.body);

	if (!validationResult.success) {
		throw new CustomError('入力データのバリデーションエラー', 422);
	}
	next();
};
