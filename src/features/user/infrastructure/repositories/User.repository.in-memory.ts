import { UserRepository } from '../../repositories/User.repository';
import { User } from '../../../../generated/prisma';

export class InMemoryUserRepository implements UserRepository {
	private users: User[] = [];
	private nextId = 1;

	constructor() {
		this.create({
			email: 'test@example.com',
			password: 'hashed_password_placeholder',
		});
	}

	// 全てのユーザーを返す
	async findAll(): Promise<User[]> {
		return this.users;
	}

	// IDでユーザーを検索する
	async findById(id: number): Promise<User | null> {
		const user = this.users.find((user) => user.id === id);
		return user || null;
	}

	// ログイン状態を確認する
	async findMe(): Promise<User | null> {
		// 仮のログインユーザーID一旦1にしておく
		const user = this.users.find((user) => user.id === 1);
		return user || null;
	}

	// メールアドレスでユーザーを検索する
	async findByEmail(email: string): Promise<User | null> {
		const user = this.users.find((user) => user.email === email);
		return user || null;
	}

	// ユーザーを作成する
	async create(props: Pick<User, 'email' | 'password'>): Promise<User> {
		const now = new Date();
		const newUser: User = {
			id: this.nextId++,
			name: '', // 必須フィールドのため一時的に空文字を設定
			email: props.email,
			password: props.password!,
			isAdmin: false,
			createdAt: now,
			updatedAt: now,
		};
		this.users.push(newUser);
		return newUser;
	}

	// Putメソッドでユーザーを更新する
	async update(id: number, props: Partial<User>): Promise<User> {
		const updatedUser = await this.findById(id);
		if (!updatedUser) {
			throw new Error('ユーザーが見つかりません');
		}
		//idが一致したら情報を更新する
		this.users = this.users.map((user) =>
			user.id === id ? updatedUser : user,
		);
		return updatedUser;
	}

	// ユーザーを削除する
	async delete(id: number): Promise<void> {
		const deleteUser = await this.findById(id);
		if (!deleteUser) {
			throw new Error('ユーザーが見つかりません');
		}
		//一致しなければ配列に戻る
		this.users = this.users.filter((user) => user.id !== id);
	}
}
