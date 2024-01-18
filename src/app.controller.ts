import { Controller, Post, UseInterceptors, Req, Res } from '@nestjs/common';
import { AppInterceptor } from './app.interceptor';
// import { Request, Response } from 'express';

@Controller('app')
export class AppController {
  @Post('')
  @UseInterceptors(AppInterceptor)
  //   helloworld(@Req() req: Request, @Res() res: Response): any {
  //     return res.json(req.body);
  //   }
  helloworld(): string {
    // return res.json(req.body);
    return 'this is the response';
  }
}
