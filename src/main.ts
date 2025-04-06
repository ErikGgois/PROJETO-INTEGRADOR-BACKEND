import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )
  const config = new DocumentBuilder()
    .setTitle('API de Usuários')
    .setDescription('API para gerenciamento de usuários')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  const config2 = new DocumentBuilder()
    .setTitle('API de Eventos')
    .setDescription('API para gerenciamento de eventos')
    .setVersion('1.0')
    .build();
  const document2 = SwaggerModule.createDocument(app, config2);
  SwaggerModule.setup('api2', app, document2);
    
  useContainer(app.select(AppModule),{fallbackOnErrors:true})
  app.enableCors();
  await app.listen(3000);
}
bootstrap();