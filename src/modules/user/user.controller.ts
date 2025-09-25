import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService, User } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): User {
    return this.userService.create(createUserDto.name);
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
  update(@Param('id') id: string, @Body() createUserDto: CreateUserDto): User {
    return this.userService.update(+id, createUserDto.name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.userService.remove(+id);
    return { message: `User ${id} deleted` };
  }
}
