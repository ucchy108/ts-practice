import { Injectable } from '@nestjs/common';
import { Habit, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HabitService {
  constructor(private prisma: PrismaService) {}

  async find(where: Prisma.HabitWhereUniqueInput): Promise<Habit | null> {
    return this.prisma.habit.findUnique({
      where,
    });
  }

  async create(data: Prisma.HabitCreateInput): Promise<Habit> {
    return this.prisma.habit.create({
      data,
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
