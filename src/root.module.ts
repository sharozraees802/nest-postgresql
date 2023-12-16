import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { ClothesController } from './clothes/clothes.controller';

@Module({
  imports: [],
  controllers: [BookController, ClothesController],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('RootModule');
  }
}
