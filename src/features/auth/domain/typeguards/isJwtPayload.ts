import { JwtPayload } from '../interfaces/JwtPayload.interface';

export const isJwtPayload = (value: unknown): value is JwtPayload => {
	return (
		typeof value === 'object' &&
		value !== null &&
		'id' in value &&
		'email' in value &&
		'isAdmin' in value
	);
};
