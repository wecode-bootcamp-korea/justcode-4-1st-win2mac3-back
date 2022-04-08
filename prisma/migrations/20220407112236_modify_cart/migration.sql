/*
  Warnings:

  - Added the required column `price` to the `user_carts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_carts` ADD COLUMN `price` DECIMAL(10, 0) NOT NULL;
