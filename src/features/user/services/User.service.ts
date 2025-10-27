import { UserRepository } from '../repositories/User.repository';
import { CreateUserDto } from '../domain/dtos/CreateUser.dto';
import { UpdateUserDto } from '../domain/dtos/UpdateUser.dto';
import { User } from '../../../generated/prisma';
import bcrypt from 'bcrypt';
import {
	ConflictError,
	NotFoundError,
} from '../../../utils/errors/CustomError';

export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	// ユーザーを作成する
	async createUser(userDto: CreateUserDto): Promise<User> {
		// メールアドレスがユニークかチェック
		const existingUser = await this.userRepository.findByEmail(userDto.email);
		if (existingUser) {
			throw new ConflictError('このメールアドレスはすでに使用されています');
		}

		// パスワードをハッシュ化
		const hashedPassword = await bcrypt.hash(userDto.password, 10);

		// ユーザーをリポジトリに保存
		return this.userRepository.create({
			name: userDto.name,
			email: userDto.email,
			password: hashedPassword,
		});
	}

	// ログイン状態を確認する (実装は認証導入後)
	async findMe(): Promise<User | null> {
		return this.userRepository.findMe();
	}

	// IDでユーザーを検索する
	async findById(id: number): Promise<User> {
		const user = await this.userRepository.findById(id);
		if (!user) {
			throw new NotFoundError('指定されたIDのユーザーが見つかりません');
		}
		return user;
	}

	// メールアドレスでユーザーを検索する
	async findByEmail(email: string): Promise<User> {
		const user = await this.userRepository.findByEmail(email);
		if (!user) {
			throw new NotFoundError(
				'指定されたメールアドレスのユーザーが見つかりません',
			);
		}
		return user;
	}

	// ユーザーを更新する
	async update(id: number, userDto: UpdateUserDto): Promise<User> {
		// パスワードが含まれている場合はハッシュ化
		const updateData: Partial<User> = { ...userDto };
		if (userDto.password) {
			updateData.password = await bcrypt.hash(userDto.password, 10);
		}

		const updatedUser = await this.userRepository.update(id, updateData);
		if (!updatedUser) {
			throw new NotFoundError('更新対象のユーザーが見つかりません');
		}
		return updatedUser;
	}

	// ユーザーを削除する
	async delete(id: number): Promise<void> {
		const user = await this.userRepository.findById(id);
		if (!user) {
			throw new NotFoundError('削除対象のユーザーが見つかりません');
		}
		await this.userRepository.delete(id);
	}

	// 全てのユーザーを返す
	async findAll(): Promise<User[]> {
		return this.userRepository.findAll();
	}
}
