-- CreateEnum
CREATE TYPE "RentMode" AS ENUM ('DAY', 'WEEK', 'BIWEEKLY', 'MONTH');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_info" (
    "id" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "car_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_modes" (
    "id" TEXT NOT NULL,
    "mode" "RentMode" NOT NULL DEFAULT 'DAY',
    "priceInCents" INTEGER NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "car_modes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "car_info" ADD CONSTRAINT "car_info_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_modes" ADD CONSTRAINT "car_modes_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
