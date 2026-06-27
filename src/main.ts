import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SanitizeUsernamePipe } from './auth/pipes/santize-username.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new SanitizeUsernamePipe());
  await app.listen(3000, () => {
    console.log('App is running on http://localhost:3000');
  });
}
bootstrap();
