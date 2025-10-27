// path: /home/soma/workspace/express-tuto/src/features/item/repositories/Item.repository.ts
import { Item } from '../../../generated/prisma';
import { ItemQueryParams } from '../domain/types/ItemQueryParams';

export type CreateItemDTO = Pick<Item, 'name' | 'content' | 'price'> & {
	image: string;
};

/**
 * リポジトリが返すページネーション結果の型
 */
export interface PaginatedRepositoryResult {
	/**
	 * 取得したアイテムの配列
	 */
	items: Item[];
	/**
	 * フィルタリング条件に一致したアイテムの総数
	 */
	total: number;
}

export interface ItemRepository {
	findAll(): Promise<Item[]>;
	findById(id: number): Promise<Item | null>;
	create(props: CreateItemDTO): Promise<Item>;
	update(id: number, props: Partial<Item>): Promise<Item>;
	delete(id: number): Promise<void>;
	findAllWithFilters(
		props: ItemQueryParams,
	): Promise<PaginatedRepositoryResult>;
}
