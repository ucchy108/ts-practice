import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tasks = ['Task1', 'Task2', 'Task3', 'Task4'];
  await Promise.all(
    tasks.map((task) => {
      return prisma.task.create({
        data: {
          name: task,
        },
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
