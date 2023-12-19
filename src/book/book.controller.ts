import { Controller, Get, Post } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get('/find')
  findBook(): string {
    return 'Find book';
  }

  @Post('/create')
  createBook(): string {
    return 'Create book';
  }
}
