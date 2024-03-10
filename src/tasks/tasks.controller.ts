import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Task } from '@prisma/client';
import { TasksService } from './tasks.service';

type TaskDto = {
  name: string;
  detail: string | null;
};

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Task | null> {
    return this.tasksService.find({ id: Number(id) });
  }

  @Post()
  async create(@Body() taskDto: TaskDto): Promise<Task> {
    const { name, detail } = taskDto;
    return this.tasksService.create({
      name,
      detail,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() taskDto: TaskDto,
  ): Promise<Task> {
    const { name, detail } = taskDto;
    return this.tasksService.update({
      where: { id: Number(id) },
      data: {
        name,
        detail,
      },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.delete({ id: Number(id) });
  }
}
