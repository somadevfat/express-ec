import { TokenBlocklist } from '../../../generated/prisma';
export interface TokenBlocklistRepository {
	addToken(token: string, expiresAt: Date): Promise<void>;
	isTokenBlocked(token: string): Promise<boolean>;
	deleteToken(token: string): Promise<void>;
}
