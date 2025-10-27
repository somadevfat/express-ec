export interface ImageStorage {
	saveForItem(
		itemId: number,
		base64Data: string,
		extension: string,
	): Promise<string>; // 例: '/storage/items/1/images/uuid.png'
}
