/*
  Warnings:

  - You are about to drop the column `discount` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `one_sub_category` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `two_sub_category` on the `products` table. All the data in the column will be lost.
  - Added the required column `one_sub_category_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_after` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_before` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `two_sub_category_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_one_sub_category_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_two_sub_category_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `discount`,
    DROP COLUMN `one_sub_category`,
    DROP COLUMN `price`,
    DROP COLUMN `two_sub_category`,
    ADD COLUMN `one_sub_category_id` INTEGER NOT NULL,
    ADD COLUMN `price_after` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `price_before` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `two_sub_category_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_one_sub_category_id_fkey` FOREIGN KEY (`one_sub_category_id`) REFERENCES `one_sub_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_two_sub_category_id_fkey` FOREIGN KEY (`two_sub_category_id`) REFERENCES `two_sub_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
