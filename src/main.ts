import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Main:', process.env.port);
  console.log('Main:', process.env.logging);
  await app.listen(3000);
}
bootstrap();
