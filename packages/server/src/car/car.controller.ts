import { Controller, Get, Param, Query } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async findAll(@Query() { q }: { q: string }) {
    const cars = await this.carService.findAll(q);
    return { cars };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const car = await this.carService.findOne(id);
    return { car };
  }
}
