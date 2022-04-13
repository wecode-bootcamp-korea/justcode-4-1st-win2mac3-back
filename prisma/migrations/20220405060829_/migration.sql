/*
  Warnings:

  - You are about to alter the column `price_after` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal(65,30)`.
  - You are about to alter the column `price_before` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal(65,30)`.
  - Added the required column `value` to the `colors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `compositions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `sizes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `colors` ADD COLUMN `value` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `compositions` ADD COLUMN `value` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `price_after` DECIMAL(65, 30) NOT NULL,
    MODIFY `price_before` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `sizes` ADD COLUMN `value` VARCHAR(191) NOT NULL;
