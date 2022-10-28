import { NestFactory } from '@nestjs/core';
import { ThreadsModule } from './threads.module';

async function bootstrap() {
  const app = await NestFactory.create(ThreadsModule);
  await app.listen(3002);
  console.log('Threads online...');
}
bootstrap();
