import { z } from 'zod';

export const SigninSchema = z.object({
	email: z
		.string()
		.email({ message: '有効なメールアドレスを入力してください' })
		.toLowerCase()
		.trim(),

	password: z.string().min(1, { message: 'パスワードは必須です' }),
});
// SigninSchemaと同じ型にする
export type SigninDto = z.infer<typeof SigninSchema>;

export const validateSignin = (data: unknown): SigninDto => {
	// Zodスキーマを使用してデータを検証okならスキーマデータ返す例外（ZodError）を投げる
	return SigninSchema.parse(data);
};
// if でエラー投げれるsafeParseを使うと、エラーがあっても例外を投げずに結果を返す
export const safeValidateSignin = (data: unknown) => {
	return SigninSchema.safeParse(data);
};
