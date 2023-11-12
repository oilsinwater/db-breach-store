import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BreachesService } from './breaches.service';
import { CreateBreachDto } from './dto/create-breach.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
export class ProtectedController {
  @Get()
  @UseGuards(AuthGuard('api-key'))
  async getProtectedResource() {
    // Your protected route logic
    return 'This resource requires a valid API key';
  }
}

@Controller('breaches')
export class BreachesController {
  constructor(private readonly breachesService: BreachesService) {}

  @Post()
  create(@Body() createBreachDto: CreateBreachDto) {
    return this.breachesService.create(createBreachDto);
  }

  @Get()
  findAll() {
    return this.breachesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breachesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBreachDto: CreateBreachDto) {
    return this.breachesService.update(id, updateBreachDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breachesService.remove(id);
  }
}
