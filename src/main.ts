import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('globalMiddleWareOne');
  next();
}

function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('globalMiddleWareTwo');
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(3000);
}
bootstrap();
