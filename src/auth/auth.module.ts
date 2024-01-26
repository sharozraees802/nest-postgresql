import { Module } from '@nestjs/common';
import { LocalStrategy } from './passport.local.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [],
  providers: [LocalStrategy],
  exports: [],
})
export class AuthModule {
  constructor() {
    console.log('AuthModule');
  }
}
