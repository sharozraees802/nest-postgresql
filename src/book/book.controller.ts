import { Controller, Get, Post, UseGuards } from '@nestjs/common';
// import { BookGuard } from './book.guard';

@Controller('book')
// @UseGuards(new BookGuard())
export class BookController {
  @Get('/findAll')
  // @UseGuards(new BookGuard())
  findAllBooks(): string {
    return 'This api return all book';
  }

  @Post('/add')
  addBook(): string {
    return 'This api will add book';
  }
}
