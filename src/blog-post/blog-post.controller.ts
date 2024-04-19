import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBlogPostDto } from './dtos/createBlogPost.dto';
import { UpdateBlogPostDto } from './dtos/updateBlogPost.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BlogPostService } from './blog-post.service';

@ApiTags('Blog Posts')
@Controller('blog-post')
export class BlogPostController {
  constructor(private blogPostService: BlogPostService) {}

  @ApiOperation({ summary: 'Get all posts' })
  @Get()
  getAll() {
    return this.blogPostService.getAll();
  }

  @ApiOperation({ summary: 'Get post by id' })
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.blogPostService.getById(id);
  }

  @ApiOperation({ summary: 'Create Post' })
  @Post()
  addPost(@Body() createBlogPost: CreateBlogPostDto) {
    return this.blogPostService.addPost(createBlogPost);
  }

  @ApiOperation({ summary: 'Modify post' })
  @Patch(':id')
  modifyPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogPostDto: UpdateBlogPostDto,
  ) {
    return this.modifyPost(id, updateBlogPostDto);
  }

  @ApiOperation({ summary: 'Delete Post' })
  @Delete(':id')
  removePost(@Param('id', ParseIntPipe) id: number) {
    return this.blogPostService.removePost(id);
  }
}
