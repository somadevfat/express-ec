import { z } from 'zod';
export const CreateCartSchema = z.array(
	z.object({
		item_id: z.number().int().positive('Item ID must be a positive integer'),
		quantity: z
			.number()
			.int()
			.min(0, 'Quantity must be a non-negative integer'),
	}),
);
export type CreateCartDTO = z.infer<typeof CreateCartSchema>;

// バリデーション関数 (コントローラーで使用)
export const validateCreateCart = (data: unknown): CreateCartDTO => {
	return CreateCartSchema.parse(data);
};

export const safeValidateCreateCart = (data: unknown) => {
	return CreateCartSchema.safeParse(data);
};
