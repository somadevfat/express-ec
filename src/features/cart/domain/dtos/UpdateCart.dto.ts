import { z } from 'zod';

export const UpdateCartSchema = z.object({
	quantity: z.number().int().positive('Quantity must be a positive integer'),
});

export type UpdateCartDto = z.infer<typeof UpdateCartSchema>;

export const validateUpdateCart = (data: unknown): UpdateCartDto => {
	return UpdateCartSchema.parse(data);
};

export const safeValidateUpdateCart = (data: unknown) => {
	return UpdateCartSchema.safeParse(data);
};
