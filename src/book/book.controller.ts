import { BadRequestException, Controller, Get } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get('')
  helloBookApp(): string {
    throw new BadRequestException({
      statusCode: 400,
      message: 'hello',
      error: 'Bad Request',
    });
    return 'Hello Book App!';
  }
}
