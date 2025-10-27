import { z } from 'zod';

export const CreateUserSchema = z.object({
	name: z
		.string()
		.min(1, { message: '名前は必須です' })
		.max(50, { message: '名前は50文字以内で入力してください' })
		.trim()
		.refine((val) => val.length > 0, {
			message: '名前は空白のみでは入力できません',
		}),

	email: z
		.string()
		.email({ message: '有効なメールアドレスを入力してください' })
		.toLowerCase()
		.trim()
		.max(255, { message: 'メールアドレスが長すぎます' }),

	password: z
		.string()
		.min(8, { message: 'パスワードは8文字以上である必要があります' })
		.max(128, { message: 'パスワードは128文字以内で入力してください' })
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
			message:
				'パスワードは大文字・小文字・数字・特殊文字(@$!%*?&)を含む必要があります',
		}),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;

export const validateCreateUser = (data: unknown): CreateUserDto => {
	return CreateUserSchema.parse(data);
};

export const safeValidateCreateUser = (data: unknown) => {
	return CreateUserSchema.safeParse(data);
};
