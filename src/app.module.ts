import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreachesModule } from './breaches/breaches.module';

@Module({
  imports: [AuthModule, BreachesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
