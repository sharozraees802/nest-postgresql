import { Module } from '@nestjs/common';
import { Feature1Module } from './feature1.module';
import { Feature2Module } from './feature2.module';
import { Feature3Module } from './feature3.module';

@Module({
  imports: [Feature1Module, Feature2Module, Feature3Module],
  controllers: [],
  providers: [],
  exports: [],
})
export class OrdersModule {
  constructor() {
    console.log('OrdersModule');
  }
}
