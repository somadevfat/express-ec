import { Router } from 'express';
import { CartController } from '../controllers/Cart.controller';
import { CartService } from '@/features/cart/service/Cart.service';
import { PrismaCartRepository } from '@/features/cart/infrastructure/repositories/Cart.repository.prisma';
import { isAdmin } from '@/middlewares/isAdmin';
import { isTokenBlocked } from '@/middlewares/isBlockList';
import { verifyAuthToken } from '@/middlewares/verifyAuthToken';
import {
	validateCreateCart,
	validateUpdateCart,
} from '../middlewares/validation.middlewere';

const cartRoutes = Router();

// 依存性の注入 (DI)
const cartRepository = new PrismaCartRepository();
const cartService = new CartService(cartRepository);
const cartController = new CartController(cartService);

// エンドポイントとコントローラーのメソッドを紐付け
cartRoutes.get('/', isTokenBlocked, verifyAuthToken, cartController.findAll);
cartRoutes.get(
	'/:id',
	isTokenBlocked,
	verifyAuthToken,
	cartController.findById,
);

cartRoutes.post(
	'/',
	verifyAuthToken,
	isTokenBlocked,
	validateCreateCart,

	cartController.create,
);

cartRoutes.put(
	'/:id',
	verifyAuthToken,
	isTokenBlocked,
	validateUpdateCart,
	cartController.update,
);

export { cartRoutes };
