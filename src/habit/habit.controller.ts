import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Habit } from '@prisma/client';
import { HabitService } from './habit.service';

type HabitDto = {
  date: string;
  note: string;
};

@Controller('habit')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @Get(':id')
  async find(@Param('id') id: string): Promise<Habit | null> {
    return this.habitService.find({ id: Number(id) });
  }

  @Post()
  async create(@Body() habitDto: HabitDto): Promise<Habit> {
    const { date, note } = habitDto;
    return this.habitService.create({
      date,
      note,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() habitDto: HabitDto,
  ): Promise<Habit> {
    const { date, note } = habitDto;
    return this.habitService.update({
      where: { id: Number(id) },
      data: {
        date,
        note,
      },
    });
  }

  @Delete(':id')
  async delete(@Param(':id') id: string) {
    return this.habitService.delete({ id: Number(id) });
  }
}
