import { z } from 'zod';

export const UpdateUserSchema = z.object({
	name: z
		.string()
		.min(1, { message: '名前は必須です' })
		.max(50, { message: '名前は50文字以内で入力してください' })
		.trim() // 空白を削除
		.refine((val) => val.length > 0, {
			// 名前が空白のみの場合はエラーカスタム
			message: '名前は空白のみでは入力できません',
		})
		.optional(), // 更新したい情報のみ送るので、あってもなくてもOK

	email: z
		.string()
		.email({ message: '有効なメールアドレスを入力してください' })
		.toLowerCase() // 小文字に変換
		.trim()
		.max(255, { message: 'メールアドレスが長すぎます' })
		.optional(),

	password: z
		.string()
		.min(8, { message: 'パスワードは8文字以上である必要があります' })
		.max(128, { message: 'パスワードは128文字以内で入力してください' })
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
			message:
				'パスワードは大文字・小文字・数字・特殊文字(@$!%*?&)を含む必要があります',
		})
		.optional(),
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;

export const validateUpdateUser = (data: unknown): UpdateUserDto => {
	return UpdateUserSchema.parse(data);
};

export const safeValidateUpdateUser = (data: unknown) => {
	return UpdateUserSchema.safeParse(data);
};
