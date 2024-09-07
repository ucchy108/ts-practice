import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [PrismaModule],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
