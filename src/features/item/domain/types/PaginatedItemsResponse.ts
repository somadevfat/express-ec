import type { Item } from '@/generated/prisma';

/**
 * APIのページネーション付きレスポンスの構造を定義するインターフェース
 */
export interface PaginatedItemsResponse {
	/**
	 * フィルタリングされたアイテムの総数
	 * @example 100
	 */
	total: number;

	/**
	 * 1ページあたりのアイテム数 (limit)
	 * @example 10
	 */
	perPage: number;

	/**
	 * 現在のページ番号 (page)
	 * @example 1
	 */
	currentPage: number;

	/**
	 * 最終ページの番号
	 * @example 10
	 */
	lastPage: number;

	/**
	 * 現在のページで表示される最初のアイテムの通し番号
	 * @example 1
	 */
	from: number;

	/**
	 * 現在のページで表示される最後のアイテムの通し番号
	 * @example 10
	 */
	to: number;

	/**
	 * 次のページへのURL（存在しない場合はnull）
	 * @example "/api/items?page=2&limit=10"
	 */
	nextPageUrl: string | null;

	/**
	 * 前のページへのURL（存在しない場合はnull）
	 * @example null
	 */
	prevPageUrl: string | null;

	/**
	 * このAPIエンドポイントのベースパス
	 * @example "/api/items"
	 */
	path: string;

	/**
	 * 取得したアイテムのデータの配列
	 */
	data: Item[];
}
