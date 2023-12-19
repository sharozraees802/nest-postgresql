import { Module } from '@nestjs/common';
import { BookController } from './book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
  exports: [],
})
export class BookModule {
  constructor() {
    console.log('BookModule');
  }
}
