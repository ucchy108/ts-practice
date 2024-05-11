import {
  Args,
  Query,
  // Mutation,
  Parent,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { Task, Habit, HabitOnTask } from '@prisma/client';
import { HabitService } from './habit.service';

type HabitDto = Habit & {
  tasks: TaskDto[];
};

type TaskDto = HabitOnTask & {
  task: Task;
};

@Resolver('Habit')
export class HabitResolver {
  constructor(private habitService: HabitService) {}

  @Query()
  async habit(@Args('id') id: number): Promise<Habit | null> {
    const data = this.habitService.find({ id });
    return data;
  }

  @ResolveField()
  async tasks(@Parent() habit: HabitDto): Promise<Task[]> {
    if (habit.tasks) {
      const tasks = habit.tasks.map((t: TaskDto) => t.task);
      return tasks;
    }
    return [];
  }
}
