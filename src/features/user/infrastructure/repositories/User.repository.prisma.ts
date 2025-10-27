// src/features/user/infrastructure/repositories/User.repository.prisma.ts
import { User } from '../../../../generated/prisma';
import { UserRepository } from '../../repositories/User.repository';
import prisma from '../../../../config/prisma.config';
import { CreateUserDto } from '../../domain/dtos/CreateUser.dto';
import { UpdateUserDto } from '../../domain/dtos/UpdateUser.dto';

export class PrismaUserRepository implements UserRepository {
	async findAll(): Promise<User[]> {
		return await prisma.user.findMany();
	}

	async findById(id: number): Promise<User | null> {
		return await prisma.user.findUnique({
			where: { id },
		});
	}

	async findByEmail(email: string): Promise<User | null> {
		return await prisma.user.findUnique({
			where: { email },
		});
	}

	// findMeの実装は認証方法に依存するため、一旦nullを返すようにしておきます。
	// JWTなどを使う際に、デコードしたIDを使ってfindByIdを呼び出す形になります。
	async findMe(): Promise<User | null> {
		// TODO: 認証ロジックに基づいて実装
		return null;
	}

	async create(props: Pick<User, 'email' | 'password'>): Promise<User> {
		return await prisma.user.create({
			data: {
				name: '', // 必須フィールドのため一時的に空文字を設定
				email: props.email,
				password: props.password!,
			},
		});
	}

	async update(id: number, props: Partial<User>): Promise<User> {
		return await prisma.user.update({
			where: { id },
			data: props,
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.user.delete({
			where: { id },
		});
	}
}
