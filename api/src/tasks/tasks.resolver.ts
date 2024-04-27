import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { Task } from '@prisma/client';
import { TasksService } from './tasks.service';

@Resolver('Task')
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query('task')
  async getTask(@Args('id') id: number): Promise<Task | null> {
    return this.tasksService.find({ id });
  }

  @Query('tasks')
  async getAllTask(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Mutation()
  async createTask(
    @Args('name') name: string,
    @Args('detail') detail: string,
  ): Promise<Task> {
    return this.tasksService.create({
      name,
      detail,
    });
  }
}
