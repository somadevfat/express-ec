import { z } from 'zod';

export const itemQuerySchema = z.object({
  name_like: z.string().optional(),
  price_gte: z.coerce.number().int().nonnegative().optional(),
  price_lte: z.coerce.number().int().nonnegative().optional(),
  price_gt: z.coerce.number().int().nonnegative().optional(),
  price_lt: z.coerce.number().int().nonnegative().optional(),
  limit: z.coerce.number().int().min(1).optional(),
  page: z.coerce.number().int().min(1).optional(),
});

export type ItemQuerySchema = z.infer<typeof itemQuerySchema>;

