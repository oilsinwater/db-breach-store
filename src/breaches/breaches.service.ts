import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBreachDto } from './dto/create-breach.dto';
import { Breach } from './entities/breach.entity';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { BreachCsvDto } from './dto/breach-csv.dto';

@Injectable()
export class BreachesService {
  constructor(@InjectModel(Breach.name) private breachModel: Model<Breach>) {}

  async create(createBreachDto: CreateBreachDto): Promise<Breach> {
    const newBreach = new this.breachModel(createBreachDto);
    return newBreach.save();
  }

  async findAll(): Promise<Breach[]> {
    return this.breachModel.find().exec();
  }

  async findOne(id: string): Promise<Breach> {
    return this.breachModel.findById(id).exec();
  }

  async update(id: string, updateBreachDto: CreateBreachDto): Promise<Breach> {
    return this.breachModel
      .findByIdAndUpdate(id, updateBreachDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.breachModel.findByIdAndRemove(id).exec();
  }

  async parseCsvFile(filePath: string): Promise<BreachCsvDto[]> {
    const results: BreachCsvDto[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}
