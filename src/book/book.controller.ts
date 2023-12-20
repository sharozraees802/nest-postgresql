import { BadRequestException, Controller, Get } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get('')
  helloBookApp(): string {
    throw new BadRequestException();
    return 'Hello Book App!';
  }
}
