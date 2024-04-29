import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { HabitService } from './habit.service';
import { TasksService } from '../tasks/tasks.service';

describe('HabitService', () => {
  let service: HabitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitService, TasksService, PrismaService],
    }).compile();

    service = module.get<HabitService>(HabitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
