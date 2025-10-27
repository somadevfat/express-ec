import { NextFunction, Request, Response } from 'express';
import { ZodObject, ZodError } from 'zod';

export const validateQuery = (schema: ZodObject<any>) =>
  (req: Request, _res: Response, next: NextFunction) => {
    try {
      const parsed = schema.parse(req.query);
      // 正規化された値を一時フィールドへ格納
      (req as any).validated = parsed;
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        return next(e); // 既存のエラーハンドラで422へマップされる想定
      }
      next(e as Error);
    }
  };
