import {
  BadRequestException,
  Controller,
  Get,
  UseFilters,
} from '@nestjs/common';
import { BookCustomExceptionFilter } from './book.exception.filter';
// import { BookException } from './book.exception';

@Controller('book')
@UseFilters(BookCustomExceptionFilter)
export class BookController {
  @Get('')
  helloBookApp(): string {
    throw new BadRequestException();
    return 'Hello Book App!';
  }
}
