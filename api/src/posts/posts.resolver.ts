import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostDto } from '../types';
import { GqlAuthGuard } from '../auth/gql-auth.guard';

@Resolver('Post')
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query()
  async post(@Args('id') id: number) {
    return this.postsService.find(id);
  }

  @Query()
  async posts() {
    return this.postsService.findByAll();
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async createPost(@Args() createPost: CreatePostDto) {
    return this.postsService.create(createPost);
  }
}
