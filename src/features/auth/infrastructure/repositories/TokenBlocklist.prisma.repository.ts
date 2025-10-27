import { TokenBlocklist } from '../../../../generated/prisma';
import prisma from '../../../../config/prisma.config';
import { TokenBlocklistRepository } from '../../repositories/TokenBlocklist.repository';
export class PrismaTokenBlocklistRepository
	implements TokenBlocklistRepository
{
	async addToken(token: string, expiresAt: Date) {
		await prisma.tokenBlocklist.create({
			data: {
				token,
				expiresAt,
			},
		});
	}
	async isTokenBlocked(token: string): Promise<boolean> {
		const tokenBlocklist = await prisma.tokenBlocklist.findUnique({
			where: {
				token,
			},
		});
		return tokenBlocklist !== null;
	}
	async deleteToken(token: string): Promise<void> {
		await prisma.tokenBlocklist.deleteMany({
			where: {
				token,
			},
		});
	}
}
