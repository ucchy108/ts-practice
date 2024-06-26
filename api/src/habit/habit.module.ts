import { Module } from '@nestjs/common';
import { HabitService } from './habit.service';
import { HabitResolver } from './habit.resolver';
import { HabitController } from './habit.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  imports: [PrismaModule, TasksModule],
  providers: [HabitService, HabitResolver],
  controllers: [HabitController],
})
export class HabitModule {}
