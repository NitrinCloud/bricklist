/*
  Warnings:

  - You are about to drop the `WishlistsOnSets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "WishlistsOnSets";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_SetToWishlist" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SetToWishlist_A_fkey" FOREIGN KEY ("A") REFERENCES "Set" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SetToWishlist_B_fkey" FOREIGN KEY ("B") REFERENCES "Wishlist" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_SetToWishlist_AB_unique" ON "_SetToWishlist"("A", "B");

-- CreateIndex
CREATE INDEX "_SetToWishlist_B_index" ON "_SetToWishlist"("B");
