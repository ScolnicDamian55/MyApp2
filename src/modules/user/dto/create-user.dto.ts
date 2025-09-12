import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Damian', description: 'Имя пользователя' })
  @IsString()
  @IsNotEmpty({ message: 'Имя не может быть пустым' })
  name: string;
}
