import { JwtPayload } from '../../features/auth/domain/interfaces/JwtPayload.interface';
// リクエストにuserが宣言しなくても型が使えるようにする
declare global {
	namespace Express {
		interface Request {
			user?: JwtPayload;
		}
	}
}
