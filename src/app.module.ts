import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.local.env'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName: 'mydb' }),
    BookModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
