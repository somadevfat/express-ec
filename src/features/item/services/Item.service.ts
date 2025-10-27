import { PaginatedItemsResponse } from "../domain/types/PaginatedItemsResponse";
import { Item } from "@/generated/prisma";
import { PrismaItemRepository } from "../infrastructure/repositories/Item.repository.prisma";
import { CreateItemDto } from "../domain/dtos/CreateItem.dto";
import { UpdateItemDto } from "../domain/dtos/UpdateItem.dto";
import { ItemQueryParams } from "../domain/types/ItemQueryParams";
import { ImageStorage } from "../application/ports/ImageStorage";
import {
  BadRequestError,
  NotFoundError,
  ValidationError,
} from "@/utils/errors/CustomError";
export class ItemService {
  constructor(
    private readonly itemRepository: PrismaItemRepository,
    private readonly imageStorage: ImageStorage
  ) {}

  // アイテムを全て取得する
  async findAll(
    filters: ItemQueryParams = {}
  ): Promise<PaginatedItemsResponse> {
    // バリデーションはミドルウェアで実施する前提
    const validatedFilters = filters;

    // リポジトリからデータと総数を取得
    const { items, total } = await this.itemRepository.findAllWithFilters(
      validatedFilters
    );

    const perPage = validatedFilters.limit || 10;
    const currentPage = validatedFilters.page || 1;
    // 常に切りあげでページ数バグらないように
    const lastPage = total > 0 ? Math.ceil(total / perPage) : 1;
    //
    const from = total > 0 ? (currentPage - 1) * perPage + 1 : 0;
    const to = total > 0 ? from + items.length - 1 : 0;

    const buildUrl = (page: number) => {
      const params = new URLSearchParams();
      // validatedFiltersからクエリパラメータを再構築してフィルター条件を維持
      Object.entries(validatedFilters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, String(value));
        }
      });
      params.set("page", String(page));
      if (!params.has("limit")) {
        params.append("limit", String(perPage));
      }
      // パスを修正
      return `/api/items?${params.toString()}`;
    };

    const nextPageUrl =
      currentPage < lastPage ? buildUrl(currentPage + 1) : null;
    const prevPageUrl = currentPage > 1 ? buildUrl(currentPage - 1) : null;

    // レスポンスオブジェクトを構築
    return {
      total,
      perPage,
      currentPage,
      lastPage,
      from,
      to,
      nextPageUrl,
      prevPageUrl,
      path: "/api/items",
      data: items,
    };
  }

  // IDでアイテムを検索する
  async findById(id: number): Promise<Item | null> {
    const item = await this.itemRepository.findById(id);
    if (!item) {
      throw new NotFoundError("アイテムが見つかりません");
    }
    return item;
  }

  // アイテムを作成する

  async create(dto: CreateItemDto): Promise<Item> {
    const imageUrl = await this.imageStorage.saveForItem(
      Date.now(), // 一時的なID（後で実際のIDに更新）
      dto.base64,
      dto.extension
    );
    return this.itemRepository.create({
      name: dto.name,
      price: dto.price,
      content: dto.content,
      image: imageUrl,
    });
  }

  // アイテムを更新する
  async update(id: number, itemDto: UpdateItemDto): Promise<Item> {
    const updateData: Partial<
      Pick<Item, "name" | "content" | "price" | "image">
    > = {};
    // 更新するフィールドのみを設定
    if (itemDto.name !== undefined) updateData.name = itemDto.name;
    if (itemDto.content !== undefined) updateData.content = itemDto.content;
    if (itemDto.price !== undefined) updateData.price = itemDto.price;
    // 画像更新: base64 と extension の両方が渡された場合のみ処理
    if (itemDto.base64 && itemDto.extension) {
      const imageUrl = await this.imageStorage.saveForItem(
        id,
        itemDto.base64,
        itemDto.extension
      );
      updateData.image = imageUrl;
    }

    try {
      return await this.itemRepository.update(id, updateData);
    } catch (e: any) {
      // Prisma: Record to update not found
      if (e && e.code === "P2025") {
        throw new NotFoundError("アイテムが存在しません");
      }
      throw e;
    }
  }

  // アイテムを削除する
  async delete(id: number): Promise<void> {
    try {
      await this.itemRepository.delete(id);
    } catch (e: any) {
      // ★★★ 詳細なエラーログを追加 ★★★
      console.error("ItemService.delete failed:", e);

      // Prisma: Record to delete not found
      if (e && e.code === "P2025") {
        throw new NotFoundError("アイテムが存在しません");
      }
      // Prisma: Foreign key constraint failed
      if (e && e.code === "P2003") {
        throw new BadRequestError(
          "この商品は他のデータ（カートなど）で使用されているため削除できません。"
        );
      }
      throw e;
    }
  }
}
