/*
  Warnings:

  - You are about to alter the column `price_add` on the `compositions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,0)`.
  - You are about to alter the column `price_add` on the `sizes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,0)`.

*/
-- AlterTable
ALTER TABLE `compositions` MODIFY `price_add` DECIMAL(10, 0) NOT NULL;

-- AlterTable
ALTER TABLE `sizes` MODIFY `price_add` DECIMAL(10, 0) NOT NULL;
