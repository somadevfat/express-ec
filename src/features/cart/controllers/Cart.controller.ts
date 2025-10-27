import { NextFunction, Request, Response } from 'express';
import { CartService } from '../service/Cart.service';
import { NotFoundError } from '../../../utils/errors/CustomError';

export class CartController {
	constructor(private readonly cartService: CartService) {}

	// ユーザーを作成する
	create = async (req: Request, res: Response, next: NextFunction) => {
		try {
			if (!req.user) {
				throw new NotFoundError('ユーザーが存在しません');
			}
			const userId = req.user.id;
			const cartItemsData = req.body;
			const cartItems = cartItemsData.map(
				(item: { item_id: number; quantity: number }) => ({
					userId: userId,
					itemId: item.item_id,
					quantity: item.quantity,
				}),
			);
			const createdCarts = await this.cartService.create(cartItems);
			res.status(201).json(createdCarts);
		} catch (error) {
			console.error('cart create error = ', error);
			next(error);
		}
	};

	findById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const cart = await this.cartService.findById(Number(req.params.id));
			res.json(cart);
		} catch (error) {
			next(error);
		}
	};

	update = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// 2. ユーザー更新処理の実行
			const updatedCart = await this.cartService.update(
				Number(req.params.id),
				req.body,
			);
			res.json(updatedCart);
		} catch (error) {
			next(error);
		}
	};

	// 全てのユーザーを返す
	findAll = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const carts = await this.cartService.findAll();
			res.json(carts);
		} catch (error) {
			next(error);
		}
	};
}
