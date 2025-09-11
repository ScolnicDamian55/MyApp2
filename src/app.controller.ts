import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('users')
  getHello(): string {
    const name = 'Дамиан';
    return `Привет Меня зовут ${name}!`;
  }
}
