import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreachesModule } from './breaches/breaches.module';

@Module({
  imports: [BreachesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
