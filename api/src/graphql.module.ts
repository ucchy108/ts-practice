import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PostsModule } from 'src/posts/posts.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    PostsModule,
    ProfilesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./graphql/*.graphql'],
    }),
  ],
})
export class GraphqlModule {}
