import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('book')
export class BookController {
  //add book
  @Post('/add')
  addBook(): string {
    return 'This will be add book';
  }
  //delete book
  @Delete('/delete')
  deleteBook(): string {
    return 'This is for deleteing book';
  }
  //update book
  @Put('/update')
  updateBook(): string {
    return 'This is for updating book';
  }
  //find all book
  @Get('/findAll')
  findAllBook(): string {
    return 'This is for finding all book';
  }

  @Get('/findBookById/:bookId')
  findBookById(@Param() params): string {
    console.log(params.bookId);
    return `This is for finding book by id ${params.bookId}`;
  }
}
