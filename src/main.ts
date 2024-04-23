import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { readFileSync } from 'fs';
async function bootstrap() {
  // const httpsOptions = {
  //   key: readFileSync('./secrets/private-key.pem'),
  //   cert: readFileSync('./secrets/public-certificate.pem'),
  // };
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Ardi Documentations')
    .setDescription('Ardi backend API documentations')
    .setVersion('1.0')
    .addTag('Ardi')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
