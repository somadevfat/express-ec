-- AlterTable
ALTER TABLE "public"."Cart" ADD COLUMN     "createdBy" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "updatedBy" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "public"."Item" ADD COLUMN     "extension" TEXT;
