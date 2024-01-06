import { User } from '../entities/user.entity';
import { UserDto } from 'src/application/dtos/users/user.dto';

export interface IUserRepository {
  createUser(user: User): Promise<UserDto>;
  getUsers(): Promise<User[]>;
}
