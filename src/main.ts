import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // romeve from paylod the attributes that is not to type
    forbidNonWhitelisted: true // this option no allow other params
  }))
  await app.listen(3000);
}
bootstrap();
