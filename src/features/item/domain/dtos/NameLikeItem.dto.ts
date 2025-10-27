import { z } from 'zod';
export const ItemFiltersSchema = z.object({
	name_like: z.string().optional(),
	price_gte: z.number().int().min(0).optional(),
	price_lte: z.number().int().min(0).optional(),
	price_gt: z.number().int().min(0).optional(),
	price_lt: z.number().int().min(0).optional(),
	limit: z.number().int().min(1).max(100).optional(),
	page: z.number().int().min(1).optional(),
});
export type NameLikeItem = z.infer<typeof ItemFiltersSchema>;

// バリデーション関数 (コントローラーで使用)
export const validateNameLikeItem = (data: unknown): NameLikeItem => {
	return ItemFiltersSchema.parse(data);
};

export const safeValidateItemFilters = (data: unknown) => {
	return ItemFiltersSchema.safeParse(data);
};
