// 使ってないです。インメモリのときに使っていたので残してます。
export interface User {
	id: number;
	email: string;
	password?: string;
	emailVerifiedAt: string | null;
	emailReissueToken: string | null;
	isAdmin: boolean;
	createdAt: string;
	updatedAt: string;
	createdBy: number | null;
	updatedBy: number | null;
}

import { getCurrentISODate } from '../../../../utils/dateUtils';

export function createUserEntity(
	props: Pick<User, 'email' | 'password'>,
): User {
	const now = getCurrentISODate();
	return {
		id: 0, // DBで自動採番されるため、一時的な値
		email: props.email,
		password: props.password,
		emailVerifiedAt: null,
		emailReissueToken: null,
		isAdmin: false,
		createdAt: now,
		updatedAt: now,
		createdBy: null, // 認証情報から設定するのが一般的
		updatedBy: null,
	};
}
