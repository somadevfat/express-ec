import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../features/auth/services/Auth.service';
import { PrismaTokenBlocklistRepository } from '../features/auth/infrastructure/repositories/TokenBlocklist.prisma.repository';
import { CustomError } from '../utils/errors/CustomError';
import { PrismaUserRepository } from '../features/user/infrastructure/repositories/User.repository.prisma';
const userRepository = new PrismaUserRepository();
const tokenBlocklistRepository = new PrismaTokenBlocklistRepository();

export const isTokenBlocked = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const token = req.header('Authorization')?.split(' ')[1];
	if (!token) {
		return next(new CustomError('認証トークンが必要です', 401));
	}
	const authService = new AuthService(userRepository, tokenBlocklistRepository);
	const isBlocked = await authService.isTokenBlocked(token);
	if (isBlocked) {
		return next(
			new CustomError('認証トークンがブロックリストに追加されています', 401),
		);
	}
	next();
};
