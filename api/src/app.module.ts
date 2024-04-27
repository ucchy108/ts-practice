import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { HabitModule } from './habit/habit.module';

@Module({
  imports: [
    TasksModule,
    HabitModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./graphql/**.gql'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
