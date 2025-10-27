import { ImageStorage } from '@/features/item/application/ports/ImageStorage';
import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';

export class LocalImageStorage implements ImageStorage {
	private readonly baseStoragePath: string;
	private readonly publicPath: string;

	constructor(baseStoragePath: string, publicPath: string) {
		this.baseStoragePath = baseStoragePath;
		this.publicPath = publicPath;
	}

	async saveForItem(
		itemId: number,
		base64Data: string,
		extension: string,
	): Promise<string> {
		const buffer = Buffer.from(base64Data, 'base64');

		const filename = `${crypto.randomUUID()}.${extension}`;
		const relativeDir = path.join('items', String(itemId), 'images');
		const fullDir = path.join(this.baseStoragePath, relativeDir);
		const fullPath = path.join(fullDir, filename);

		await fs.mkdir(fullDir, { recursive: true });
		await fs.writeFile(fullPath, buffer);

		const publicImageUrl = path
			.join(this.publicPath, relativeDir, filename)
			.replace(/\ /g, '/');
		return publicImageUrl;
	}
}
