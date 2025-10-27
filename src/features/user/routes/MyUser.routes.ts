import { Router } from 'express';
import { UserController } from '../controllers/User.controller';
import { UserService } from '../services/User.service';
// import { InMemoryUserRepository } from "../infrastructure/repositories/User.repository.in-memory";
import { PrismaUserRepository } from '../infrastructure/repositories/User.repository.prisma';
import { verifyAuthToken } from '../../../middlewares/verifyAuthToken';
import { isTokenBlocked } from '../../../middlewares/isBlockList';
// ユーザーリポジトリのインスタンスを作成
const router = Router();

const userRepository = new PrismaUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get('/', isTokenBlocked, verifyAuthToken, (req, res, next) => {
	userController.findMe(req, res, next);
});

export default router;
