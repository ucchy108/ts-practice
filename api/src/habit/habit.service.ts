import { Injectable } from '@nestjs/common';
import { Habit, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TasksService } from '../tasks/tasks.service';

@Injectable()
export class HabitService {
  constructor(
    private prisma: PrismaService,
    private task: TasksService,
  ) {}

  async find(where: Prisma.HabitWhereUniqueInput): Promise<Habit | null> {
    return this.prisma.habit.findUnique({
      where,
      include: {
        tasks: {
          include: {
            task: true,
          },
        },
      },
    });
  }

  async create(data: Prisma.HabitCreateInput): Promise<Habit> {
    const tasks = await this.task.findAll();
    const formatData: Prisma.HabitCreateInput = data;
    formatData.tasks = {
      create: tasks.map((task) => ({
        achievedAt: new Date(),
        achieved: false,
        task: {
          connect: {
            id: task.id,
          },
        },
      })),
    };

    return this.prisma.habit.create({
      data: formatData,
    });
  }

  async update(params: {
    where: Prisma.HabitWhereUniqueInput;
    data: Prisma.HabitUpdateInput;
  }): Promise<Habit> {
    const { data, where } = params;

    return this.prisma.habit.update({
      where,
      data,
    });
  }

  async delete(where: Prisma.HabitWhereUniqueInput) {
    return this.prisma.habit.delete({
      where,
    });
  }
}
