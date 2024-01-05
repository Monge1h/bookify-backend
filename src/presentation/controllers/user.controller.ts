import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from '../../application/services/user.service';
import { CreateUserDto } from 'src/application/dtos/users/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async createUser() {
    return 'Hello World!';
  }
}
