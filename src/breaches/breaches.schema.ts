import * as mongoose from 'mongoose';

export const BreachSchema = new mongoose.Schema({
  name: String,
  sampleBreachLink: String,
  breachDate: [Date],
  reportDate: Date,
});
