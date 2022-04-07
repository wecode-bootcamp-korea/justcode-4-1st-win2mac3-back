/*
  Warnings:

  - You are about to alter the column `price_after` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,0)`.
  - You are about to alter the column `price_before` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,0)`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `price_after` DECIMAL(10, 0) NOT NULL,
    MODIFY `price_before` DECIMAL(10, 0) NOT NULL;
