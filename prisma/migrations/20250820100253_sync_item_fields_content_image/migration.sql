/*
  Warnings:

  - You are about to drop the column `description` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `CartItem` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,itemId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemId` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_cartId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_itemId_fkey";

-- DropIndex
DROP INDEX "public"."Cart_userId_key";

-- AlterTable
ALTER TABLE "public"."Cart" ADD COLUMN     "itemId" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Item" DROP COLUMN "description",
DROP COLUMN "imageUrl",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "image" TEXT;

-- DropTable
DROP TABLE "public"."CartItem";

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_itemId_key" ON "public"."Cart"("userId", "itemId");

-- AddForeignKey
ALTER TABLE "public"."Cart" ADD CONSTRAINT "Cart_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
