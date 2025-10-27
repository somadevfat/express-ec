import { Request, Response, NextFunction } from 'express';
import { safeValidateCreateItem } from '../domain/dtos/CreateItem.dto';
import { safeValidateUpdateItem } from '../domain/dtos/UpdateItem.dto';
import { CustomError } from '../../../utils/errors/CustomError';

export const validateCreateItem = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const validationResult = safeValidateCreateItem(req.body);

	if (!validationResult.success) {
		console.error('Item validation error details:', validationResult.error);
		throw new CustomError('入力データのバリデーションエラー', 422);
	}
	// transform済みの正規化データ（データURL→純Base64など）を反映
	req.body = validationResult.data;
	next();
};

export const validateUpdateItem = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const validationResult = safeValidateUpdateItem(req.body);

	if (!validationResult.success) {
		console.error(
			'Item update validation error details:',
			validationResult.error,
		);
		throw new CustomError('入力データのバリデーションエラー', 422);
	}
	// transform済みの正規化データ（データURL→純Base64など）を反映
	req.body = validationResult.data;
	next();
};
