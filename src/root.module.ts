import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('RootModule');
  }
}
