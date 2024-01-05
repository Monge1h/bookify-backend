import { PrismaService } from '../persistence/prisma/prisma.service';
import { User } from 'src/modules/users/domains/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/application/dtos/users/user.dto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(user: User): Promise<UserDto> {
    const createdUser = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    return new UserDto(createdUser);
  }

  async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    console.log(users);
    return users.map(
      (user) => new User(user.id, user.name, user.email, user.password),
    );
  }
}
