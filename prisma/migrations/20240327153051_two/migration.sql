/*
  Warnings:

  - You are about to drop the column `description` on the `BookPage` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `BookPage` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pageNumber` to the `BookPage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "publishedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "BookPage" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "pageNumber" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Author_userId_key" ON "Author"("userId");

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
