import { IUserRepository } from 'src/modules/users/domains/repositories/iuser.repository';
import { CreateUserDto } from '../dtos/users/create-user.dto';
import { User } from 'src/modules/users/domains/entities/user.entity';

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    return null;
  }
}
