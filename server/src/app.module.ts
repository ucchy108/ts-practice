import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { HabitModule } from './habit/habit.module';

@Module({
  imports: [TasksModule, HabitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
