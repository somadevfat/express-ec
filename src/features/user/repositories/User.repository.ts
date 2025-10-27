import { User } from '../../../generated/prisma';

export type CreateUserDTO = Pick<User, 'name' | 'email' | 'password'>;
export interface UserRepository {
	findAll(): Promise<User[]>;
	findMe(): Promise<User | null>;
	findById(id: number): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>;
	create(props: Pick<User, 'name' | 'email' | 'password'>): Promise<User>;
	update(id: number, props: Partial<User>): Promise<User>;
	delete(id: number): Promise<void>;
}
