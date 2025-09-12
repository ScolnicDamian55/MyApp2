import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Мой пост', description: 'Заголовок поста' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Контент поста', description: 'Содержимое поста' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: 1, description: 'ID пользователя' })
  @IsInt()
  @Min(1)
  userId: number;
}
