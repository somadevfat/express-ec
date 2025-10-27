import { Request, Response } from 'express';
import { ItemService } from '../services/Item.service';
import { BadRequestError } from '@/utils/errors/CustomError';
import { ItemQueryParams } from '../domain/types/ItemQueryParams';

export class ItemController {
	constructor(private readonly itemService: ItemService) {}

	createItem = async (req: Request, res: Response): Promise<Response> => {
		const newItem = await this.itemService.create(req.body);
		return res.status(201).json(newItem);
	};

	getAllItems = async (req: Request, res: Response): Promise<Response> => {
    // Zodミドルウェアで正規化済みのクエリを使用
    const validated = (req as any).validated as ItemQueryParams || {};
    const paginatedResult = await this.itemService.findAll(validated);
		return res.status(200).json(paginatedResult);
	};

	getItemById = async (req: Request, res: Response): Promise<Response> => {
		const { id } = req.params;
		const itemId = parseInt(id, 10);

		if (isNaN(itemId)) {
			throw new BadRequestError('Invalid item ID');
		}

		const item = await this.itemService.findById(itemId);
		return res.status(200).json(item);
	};

	updateItem = async (req: Request, res: Response): Promise<Response> => {
		const { id } = req.params;
		const itemId = parseInt(id, 10);

		if (isNaN(itemId)) {
			throw new BadRequestError('Invalid item ID');
		}

		const updatedItem = await this.itemService.update(itemId, req.body);
		return res.status(200).json(updatedItem);
	};

	deleteItem = async (req: Request, res: Response): Promise<Response> => {
		const { id } = req.params;
		const itemId = parseInt(id, 10);

		if (isNaN(itemId)) {
			throw new BadRequestError('Invalid item ID');
		}

		await this.itemService.delete(itemId);
		return res.status(204).send();
	};
}
