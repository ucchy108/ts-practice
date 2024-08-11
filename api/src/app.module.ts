import { Module } from '@nestjs/common';
import { ApiModule } from './api.module';
import { GraphqlModule } from './graphql.module';

@Module({
  imports: [ApiModule, GraphqlModule],
})
export class AppModule {}
