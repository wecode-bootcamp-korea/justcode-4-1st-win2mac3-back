/*
  Warnings:

  - Added the required column `price_add` to the `sizes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sizes` ADD COLUMN `price_add` DECIMAL(65, 30) NOT NULL;
