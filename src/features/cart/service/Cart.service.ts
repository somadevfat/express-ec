import { Cart } from '@/generated/prisma';
import { PrismaCartRepository } from '../infrastructure/repositories/Cart.repository.prisma';
import { CreateCarttype, UpdateCarttype } from '../repository/Cart.repository';

export class CartService {
	constructor(private readonly cartRepository: PrismaCartRepository) {}

	async findAll(): Promise<Cart[]> {
		return this.cartRepository.findAll();
	}

	async findById(id: number): Promise<Cart | null> {
		return this.cartRepository.findById(id);
	}

	async create(cartItems: CreateCarttype[]): Promise<Cart[]> {
		if (!cartItems) {
			throw new Error('Cart items are required');
		}

		const processedCarts: Cart[] = [];
		for (const item of cartItems) {
			const existing = await this.findByIdAndUserId(item.itemId, item.userId);

			if (item.quantity === 0) {
				// 数量が0なら削除
				if (existing) {
					await this.cartRepository.delete(existing.id);
				}
			} else {
				// 数量が0より大きい場合
				if (existing) {
					// 存在すれば数量を上書き更新
					const updatedCart = await this.cartRepository.update(existing.id, {
						quantity: item.quantity,
					});
					processedCarts.push(updatedCart);
				} else {
					// 存在しなければ新規作成
					const createdCart = await this.cartRepository.create(item);
					const newCartWithItem = await this.cartRepository.findById(
						createdCart.id,
					);
					if (newCartWithItem) {
						processedCarts.push(newCartWithItem);
					}
				}
			}
		}
		
		// 処理後のカート全件を返す
		return this.cartRepository.findAll();
	}

	async update(id: number, cartDto: UpdateCarttype): Promise<Cart> {
		return this.cartRepository.update(id, cartDto);
	}
	async findByIdAndUserId(
		itemId: number,
		userId: number,
	): Promise<Cart | null> {
		return this.cartRepository.findByIdAndUserId(itemId, userId);
	}
}
