import { Cart } from '../../../../generated/prisma';
import { CartRepository } from '../../repository/Cart.repository';
import prisma from '../../../../config/prisma.config';
import {
	CreateCarttype,
	UpdateCarttype,
} from '../../repository/Cart.repository';

export class PrismaCartRepository implements CartRepository {
	async findAll(): Promise<Cart[]> {
		return await prisma.cart.findMany({ include: { item: true } });
	}
	async findById(id: number): Promise<Cart | null> {
		return await prisma.cart.findUnique({
			where: { id },
			include: { item: true },
		});
	}
	async findByIdAndUserId(
		itemId: number,
		userId: number,
	): Promise<Cart | null> {
		return await prisma.cart.findUnique({
			where: { userId_itemId: { userId, itemId } },
			include: { item: true },
		});
	}
	
	async create(props: CreateCarttype): Promise<Cart> {
		return await prisma.cart.create({ data: props });
	}

	async update(id: number, props: UpdateCarttype): Promise<Cart> {
		return await prisma.cart.update({
			where: { id },
			data: props,
			include: { item: true },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.cart.delete({
			where: { id },
		});
	}
}
