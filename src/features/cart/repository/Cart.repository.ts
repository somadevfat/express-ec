import { Cart } from '../../../generated/prisma';

export type CreateCarttype = Pick<Cart, 'userId' | 'itemId' | 'quantity'>;
export type UpdateCarttype = Partial<Pick<Cart, 'quantity'>>;

export interface CartRepository {
	findAll(): Promise<Cart[]>;
	findById(id: number): Promise<Cart | null>;
	create(props: CreateCarttype): Promise<Cart>;
	update(id: number, props: UpdateCarttype): Promise<Cart>;
	findByIdAndUserId(id: number, userId: number): Promise<Cart | null>;
}
