import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body('name') name: string): User {
    return this.userService.create(name);
  }

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('name') name: string): User {
    return this.userService.update(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.userService.remove(+id);
    return { message: `User ${id} deleted` };
  }
}
