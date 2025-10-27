// クエリパラメータの型定義
export interface ItemQueryParams {
	name_like?: string;
	price_gte?: number;
	price_lte?: number;
	price_gt?: number;
	price_lt?: number;
	limit?: number;
	page?: number;
}

// Prismaのwhere句で使用する型
export interface ItemWhereConditions {
	name?: {
		contains: string;
	};
	price?: {
		gte?: number;
		lte?: number;
		gt?: number;
		lt?: number;
	};
}
