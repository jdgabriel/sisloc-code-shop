import { Controller, Get, Param, Query } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  findAll(@Query() { q }: { q: string }) {
    return this.carService.findAll(q);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(id);
  }
}
