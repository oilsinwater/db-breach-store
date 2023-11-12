import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreachesModule } from './breaches/breaches.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    BreachesModule,
    MongooseModule.forRoot(''),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
