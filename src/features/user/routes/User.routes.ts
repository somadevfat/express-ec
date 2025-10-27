import { Router } from 'express';
import { UserController } from '../controllers/User.controller';
import { UserService } from '../services/User.service';
// import { InMemoryUserRepository } from "../infrastructure/repositories/User.repository.in-memory";
import { PrismaUserRepository } from '../infrastructure/repositories/User.repository.prisma';
import { isAdmin } from '../../../middlewares/isAdmin';
import { verifyAuthToken } from '../../../middlewares/verifyAuthToken';
import { isTokenBlocked } from '../../../middlewares/isBlockList';
import {
	validateCreateUser,
	validateUpdateUser,
} from '../middlewares/validation.middlewere';
// ユーザーリポジトリのインスタンスを作成
const router = Router();

// const userRepository = new InMemoryUserRepository();
// Prismaを使用する場合は、以下のようにリポジトリをインスタンス化
const userRepository = new PrismaUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// 管理者用ユーザー一覧取得
router.get('/', isTokenBlocked, verifyAuthToken, isAdmin, (req, res, next) => {
	userController.findAll(req, res, next);
});

// 管理者用ユーザー取得
router.get('/:id', isTokenBlocked, verifyAuthToken, (req, res, next) => {
	userController.findById(req, res, next);
});

// ユーザー作成
router.post('/', validateCreateUser, verifyAuthToken, (req, res, next) => {
	userController.createUser(req, res, next);
});

// ユーザー更新
router.put(
	'/:id',
	validateUpdateUser,
	isTokenBlocked,
	verifyAuthToken,
	(req, res, next) => {
		userController.update(req, res, next);
	},
);

// ユーザー削除
router.delete(
	'/:id',
	isTokenBlocked,
	verifyAuthToken,
	isAdmin,
	(req, res, next) => {
		userController.delete(req, res, next);
	},
);

export default router;
