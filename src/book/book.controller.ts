import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { BookPipe } from './pipes/book.pipe';

@Controller('book')
export class BookController {
  @Get('/:id')
  findBookById(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id);

    return 'This action returns a book';
  }

  @Post('/add')
  addBook(@Body(new BookPipe()) book: BookDto): string {
    console.log(
      '🚀 ~ file: book.controller.ts:23 ~ BookController ~ addBook ~ book:',
      book,
    );
    return 'This action adds a book';
  }
}
