import { IUserRepository } from 'src/modules/users/domains/repositories/iuser.repository';
import { PrismaService } from '../persistence/prisma/prisma.service';
import { User } from 'src/modules/users/domains/entities/user.entity';

export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password, // todo encrypt password
      },
    });

    return new User(
      createdUser.id,
      createdUser.name,
      createdUser.email,
      createdUser.password,
    );
  }
}
