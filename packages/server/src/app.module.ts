import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [PrismaModule, CarModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
