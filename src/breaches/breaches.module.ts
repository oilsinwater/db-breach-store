import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BreachesService } from './breaches.service';
import { BreachesController } from './breaches.controller';
import { Breach, BreachSchema } from '../schemas/breaches.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Breach.name, schema: BreachSchema }]),
  ],
  controllers: [BreachesController],
  providers: [BreachesService],
})
export class BreachesModule {}
