import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const reflector = app.get(Reflector)
  app.useGlobalInterceptors(new TransformInterceptor(reflector))
  
  const configService = app.get(ConfigService)
  const port = configService.get('PORT')
  await app.listen(port);
}
bootstrap();