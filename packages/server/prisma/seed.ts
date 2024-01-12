import { faker } from '@faker-js/faker';

import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const cars: Prisma.CarCreateInput[] = Array(10)
  .fill({})
  .map(() => {
    const carName = faker.vehicle.vehicle();
    const cardBrand = faker.vehicle.manufacturer();
    const car: Prisma.CarCreateInput = {
      name: carName,
      brand: cardBrand,
      search_params: String(`${carName} ${cardBrand}`).toLowerCase(),
      image_url: faker.image.urlPlaceholder({
        width: 640,
        height: 480,
        text: carName,
        backgroundColor: '#000',
        textColor: '#FFF',
      }),
      modes: {
        createMany: {
          data: [
            {
              mode: 'DAY',
              priceInCents: faker.number.int({ min: 0, max: 150 }) * 1000,
            },
            {
              mode: 'WEEK',
              priceInCents: faker.number.int({ min: 151, max: 300 }) * 1000,
            },
            {
              mode: 'BIWEEKLY',
              priceInCents: faker.number.int({ min: 301, max: 550 }) * 1000,
            },
            {
              mode: 'MONTH',
              priceInCents: faker.number.int({ min: 551, max: 1000 }) * 1000,
            },
          ],
        },
      },
      infos: {
        createMany: {
          data: [
            {
              info: 'Marca',
              description: faker.vehicle.manufacturer(),
            },
            {
              info: 'Modelo',
              description: faker.vehicle.model(),
            },
            {
              info: 'Consumo',
              description: String(faker.number.int({ min: 3, max: 12 })),
            },
            {
              info: 'Combustível',
              description: faker.vehicle.fuel(),
            },
            {
              info: 'Tipo',
              description: faker.vehicle.type(),
            },
          ],
        },
      },
    };
    return car;
  });

async function main() {
  await Promise.all(cars.map((car) => prisma.car.create({ data: car })));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
