import { Resolver, Query, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query()
  async post(@Args('id') id: number) {
    return this.postsService.findById(id);
  }

  @Query()
  async posts() {
    return this.postsService.findByAll();
  }
}
