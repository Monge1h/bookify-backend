-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ownership" (
    "bookId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "onwer" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("bookId", "userId"),
    CONSTRAINT "Ownership_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ownership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ownership" ("bookId", "status", "userId") SELECT "bookId", "status", "userId" FROM "Ownership";
DROP TABLE "Ownership";
ALTER TABLE "new_Ownership" RENAME TO "Ownership";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
