import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BreachDocument = Breach & Document;

@Schema()
export class Breach {
  @Prop({ required: true })
  name: string;

  @Prop()
  sampleBreachLink: string;

  @Prop([Date])
  breachDate: Date[];

  @Prop()
  reportDate: Date;
}

export const BreachSchema = SchemaFactory.createForClass(Breach);
