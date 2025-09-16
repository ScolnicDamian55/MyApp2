import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Создать пользователя
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(createUserDto);
  }

  // Получить всех пользователей
  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  // Получить одного пользователя
  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserEntity | null> {
    return this.userService.findOne(+id);
  }

  // Обновить пользователя
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    return this.userService.update(+id, createUserDto);
  }

  // Удалить пользователя
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
