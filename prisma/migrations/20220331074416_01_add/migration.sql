/*
  Warnings:

  - You are about to drop the column `Product_id` on the `product_options` table. All the data in the column will be lost.
  - You are about to alter the column `price_after` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal(65,30)`.
  - You are about to alter the column `price_before` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal(65,30)`.
  - Added the required column `product_id` to the `product_options` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product_options` DROP FOREIGN KEY `product_options_Product_id_fkey`;

-- DropIndex
DROP INDEX `products_name_key` ON `products`;

-- AlterTable
ALTER TABLE `product_options` DROP COLUMN `Product_id`,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `price_after` DECIMAL(65, 30) NOT NULL,
    MODIFY `price_before` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `user_carts` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `product_options` ADD CONSTRAINT `product_options_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
