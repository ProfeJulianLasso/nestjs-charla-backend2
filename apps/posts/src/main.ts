import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);
  await app.listen(3003);
  console.log('Posts online...');
}
bootstrap();
