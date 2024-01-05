import { CreateUserDto } from '../dtos/users/create-user.dto';
import { User } from 'src/modules/users/domains/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UserDto } from '../dtos/users/user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(userDto: CreateUserDto): Promise<UserDto> {
    const newUser = new User(
      null,
      userDto.name,
      userDto.email,
      userDto.password,
    );

    return this.userRepository.createUser(newUser);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.getUsers();
  }
}
