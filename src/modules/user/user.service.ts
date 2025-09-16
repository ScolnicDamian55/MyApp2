import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  // Создать пользователя
  async create(userDto: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepo.create(userDto);
    return await this.userRepo.save(user);
  }

  // Найти всех пользователей (с постами, если есть связь)
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepo.find({ relations: ['posts'] });
  }

  // Найти одного пользователя
  async findOne(id: number): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: ['posts'],
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  // Обновить пользователя
  async update(id: number, userDto: Partial<CreateUserDto>): Promise<UserEntity> {
    const user = await this.findOne(id);
    Object.assign(user, userDto);
    return await this.userRepo.save(user);
  }

  // Удалить пользователя
  async remove(id: number): Promise<void> {
    const result = await this.userRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
