import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './constants';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    return this.authService.generateToken(req.user);
  }

  @Get('/android-developer')
  @UseGuards(
    AuthGuard('jwt'),
    new RoleGuard(CONSTANTS.ROLES.ANDROIDE_DEVELOPER),
  )
  androidDeveloperData(@Request() req): string {
    return 'This data for android developer only' + JSON.stringify(req.user);
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloperData(@Request() req): string {
    return 'This data for web developer only' + JSON.stringify(req.user);
  }
}
