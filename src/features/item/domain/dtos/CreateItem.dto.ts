import { z } from 'zod';
export const CreateItemSchema = z.object({
	name: z
		.string()
		.min(1, 'Name is required')
		.max(255, 'Name must be at most 255 characters'),
	price: z.number().int().positive('Price must be a positive integer'),
	content: z.string().min(1, 'Content is required'),
	// データURL(例: data:image/png;base64,AAA...) または 純Base64 の両方を許容
	base64: z
		.string()
		.min(1, 'Base64 data is required')
		.refine(
			(val) => {
				const dataUrlRe =
					/^data:image\/(png|jpg|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/i;
				const rawRe =
					/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
				return dataUrlRe.test(val) || rawRe.test(val);
			},
			{ message: 'Invalid Base64 format' },
		)
		.transform((val) => {
			const trimmed = val.trim();
			if (trimmed.startsWith('data:')) {
				return trimmed.split(',', 2)[1] ?? ''; // 純Base64へ
			}
			return trimmed;
		}),
	extension: z
		.string()
		.regex(
			/^(png|jpg|jpeg|webp)$/i,
			'Invalid image extension. Must be png, jpg, jpeg, or webp.',
		),
});
export type CreateItemDto = z.infer<typeof CreateItemSchema>;

// バリデーション関数 (コントローラーで使用)
export const validateCreateItem = (data: unknown): CreateItemDto => {
	return CreateItemSchema.parse(data);
};

export const safeValidateCreateItem = (data: unknown) => {
	return CreateItemSchema.safeParse(data);
};
