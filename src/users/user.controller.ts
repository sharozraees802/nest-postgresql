import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/find')
  findUser(): string {
    return 'Find user';
  }

  @Post('/create')
  createUser(): string {
    return 'Create user';
  }
}
