import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Пост Дамиана', description: 'Заголовок поста' })
  title: string;

  @ApiProperty({ example: 'Содержимое поста', description: 'Контент поста' })
  content: string;

  @ApiProperty({ example: 1, description: 'ID пользователя' })
  userId: number;
}
