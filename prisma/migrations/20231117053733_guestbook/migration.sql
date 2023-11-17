-- CreateTable
CREATE TABLE "GuestBook" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GuestBook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GuestBook" ADD CONSTRAINT "GuestBook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
