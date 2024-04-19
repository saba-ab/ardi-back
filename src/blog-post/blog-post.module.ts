import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './entities/blogPost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost])],
  providers: [BlogPostService],
  controllers: [BlogPostController],
})
export class BlogPostModule {}
