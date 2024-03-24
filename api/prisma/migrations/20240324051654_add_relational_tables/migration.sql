/*
  Warnings:

  - You are about to drop the column `taskId` on the `Habit` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_taskId_fkey";

-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "taskId";

-- CreateTable
CREATE TABLE "HabitOnTask" (
    "habitId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,
    "achievedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "achieved" BOOLEAN NOT NULL,

    CONSTRAINT "HabitOnTask_pkey" PRIMARY KEY ("habitId","taskId")
);

-- AddForeignKey
ALTER TABLE "HabitOnTask" ADD CONSTRAINT "HabitOnTask_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HabitOnTask" ADD CONSTRAINT "HabitOnTask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
