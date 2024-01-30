import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
export class UserModule {
  constructor(private readonly configService: ConfigService) {
    console.log('User Module:', configService.get<number>('PORT'));
    console.log('User Module:', configService.get<boolean>('LOGGING'));
  }
}
