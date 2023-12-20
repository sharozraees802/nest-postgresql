import { BadRequestException, Controller, Get } from '@nestjs/common';
import { BookException } from './book.exception';

@Controller('book')
export class BookController {
  @Get('')
  helloBookApp(): string {
    throw new BookException();
    return 'Hello Book App!';
  }
}
