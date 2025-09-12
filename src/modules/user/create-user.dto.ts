import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Damian', description: 'Имя пользователя' })
  name: string;
}
