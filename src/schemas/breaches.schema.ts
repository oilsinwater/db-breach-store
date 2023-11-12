import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Breach extends Document {
  @Prop()
  name: string;

  @Prop()
  sampleBreachLink: string;

  @Prop([Date])
  breachDate: Date[];

  @Prop()
  reportDate: Date;
}

export const BreachSchema = SchemaFactory.createForClass(Breach);
