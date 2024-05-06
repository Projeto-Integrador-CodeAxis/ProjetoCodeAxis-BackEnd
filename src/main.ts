import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Code Axis')
  .setDescription('Projeto Code Axis')
  .setContact("Code Axis","https://github.com/Projeto-Integrador-CodeAxis","codeaxis3@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-3:00';

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  
  await app.listen(4000);
}
bootstrap();
