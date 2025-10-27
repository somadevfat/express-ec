import express from 'express';
import { AuthController } from '../controllers/Auth.controller';
import { PrismaUserRepository } from '../../user/infrastructure/repositories/User.repository.prisma';
import { AuthService } from '../services/Auth.service';
import { PrismaTokenBlocklistRepository } from '../infrastructure/repositories/TokenBlocklist.prisma.repository';
import { isTokenBlocked } from '../../../middlewares/isBlockList';
import { validateSignin } from '../middlewares/validation.middlewere';
import { nullCheckMiddleware } from '../middlewares/nullCheck.middleware';
const router = express.Router();

const userRepository = new PrismaUserRepository();
const tokenBlocklistRepository = new PrismaTokenBlocklistRepository();
const authService = new AuthService(userRepository, tokenBlocklistRepository);
const authController = new AuthController(authService);

router.post(
	'/signin',
	validateSignin,
	authController.signin.bind(authController),
);
router.post(
	'/admin/signin',
	validateSignin,
	authController.adminSignin.bind(authController),
);
router.post(
	'/signout',
	isTokenBlocked,
	nullCheckMiddleware,
	authController.logout.bind(authController),
);
export default router;
