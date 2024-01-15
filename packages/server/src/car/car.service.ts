import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  findAll(queryString: string) {
    return this.prisma.car.findMany({
      where: {
        search_params: {
          contains: queryString,
        },
      },
      include: {
        modes: {
          select: {
            mode: true,
            priceInCents: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.car.findFirst({
      where: { id },
      include: {
        infos: {
          select: {
            info: true,
            description: true,
          },
        },
        modes: {
          select: {
            mode: true,
            priceInCents: true,
          },
        },
      },
    });
  }
}
