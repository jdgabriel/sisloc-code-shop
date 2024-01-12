/*
  Warnings:

  - Added the required column `search_params` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "search_params" TEXT NOT NULL;
