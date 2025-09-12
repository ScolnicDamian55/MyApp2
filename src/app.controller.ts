import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('hello')
  getHello(): string {
    const name = 'Дамиан';
    return `Привет меня зовут ${name}!`;
  }
}
