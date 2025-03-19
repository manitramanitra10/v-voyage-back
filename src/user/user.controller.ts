import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Role } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(
    @Body()
    data: {
      name: string;
      email: string;
      password: string;
      role: Role;
    },
  ) {
    return this.userService.createUser(data);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() data: { name?: string; email?: string; password?: string },
  ) {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
