import { Module } from '@nestjs/common';
import { UserController } from '../../presentation/controllers/user.controller';
import { UserService } from '../../application/services/user.service';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { PrismaService } from '../../infrastructure/persistence/prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService],
})
export class UserModule {}
