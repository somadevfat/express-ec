import { UserRepository } from '../../user/repositories/User.repository';
import { SigninDto } from '../domain/dtos/Signin.dto';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../../generated/prisma';
import { getJwtSecret } from '../../../utils/jwtUtils';
import { JwtPayload } from '../domain/interfaces/JwtPayload.interface';
import { TokenBlocklistRepository } from '../repositories/TokenBlocklist.repository';
import { PrismaTokenBlocklistRepository } from '../infrastructure/repositories/TokenBlocklist.prisma.repository';

export class AuthService {
	// DI
	constructor(
		private readonly userRepository: UserRepository,
		private readonly tokenBlocklistRepository: TokenBlocklistRepository,
	) {}

	public async signin(signinDto: SigninDto): Promise<string | null> {
		const { email, password } = signinDto;

		// 1. emailでユーザーを検索
		const user = await this.userRepository.findByEmail(email);
		if (!user) {
			// ユーザーが存在しない
			return null;
		}

		// 2. パスワードを比較
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			// パスワードが一致しない
			return null;
		}

		// 3. JWTを生成
		const token = this.generateJwt(user);

		return token;
	}

	public async adminSignin(signinDto: SigninDto): Promise<string | null> {
		const { email, password } = signinDto;

		// 1. emailでユーザーを検索
		const user = await this.userRepository.findByEmail(email);
		if (!user) {
			// ユーザーが存在しない
			return null;
		}

		// 2. 管理者かどうかをチェック
		if (!user.isAdmin) {
			// 管理者ではない
			return null;
		}

		// 3. パスワードを比較
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			// パスワードが一致しない
			return null;
		}

		// 4. JWTを生成
		const token = this.generateJwt(user);

		return token;
	}

	private generateJwt(user: User): string {
		const payload: JwtPayload = {
			id: user.id,
			email: user.email,
			name: user.name,
			isAdmin: user.isAdmin,
		};

		// 統一されたJWT秘密鍵取得方法を使用
		const secret = getJwtSecret();

		const token = jwt.sign(payload, secret, {
			expiresIn: '1h', // 有効期限を1時間に設定
		});

		return token;
	}

	public async logout(token: string) {
		// トークンをブロックリストに追加
		await this.tokenBlocklistRepository.addToken(token, new Date());
	}

	public async isTokenBlocked(token: string): Promise<boolean> {
		const isBlocked = await this.tokenBlocklistRepository.isTokenBlocked(token);
		return isBlocked;
	}

	public async deleteToken(token: string): Promise<void> {
		await this.tokenBlocklistRepository.deleteToken(token);
	}
}
