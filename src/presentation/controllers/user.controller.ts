import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../application/services/user.service';
import { CreateUserDto } from 'src/application/dtos/users/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
