/*
  Warnings:

  - You are about to drop the column `Product_id` on the `product_options` table. All the data in the column will be lost.
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
ALTER TABLE `user_carts` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `product_options` ADD CONSTRAINT `product_options_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
