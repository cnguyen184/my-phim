/*
  Warnings:

  - You are about to drop the `FavoriteGenre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Watchlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavoriteGenre" DROP CONSTRAINT "FavoriteGenre_userId_fkey";

-- DropForeignKey
ALTER TABLE "Watchlist" DROP CONSTRAINT "Watchlist_userId_fkey";

-- DropTable
DROP TABLE "FavoriteGenre";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Watchlist";
