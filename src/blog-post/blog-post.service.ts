import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogPost } from './entities/blogPost.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateBlogPostDto } from './dtos/updateBlogPost.dto';
import { CreateBlogPostDto } from './dtos/createBlogPost.dto';

@Injectable()
export class BlogPostService {
  constructor(
    @InjectRepository(BlogPost)
    private blogPostRepository: Repository<BlogPost>,
  ) {}

  async getAll(): Promise<BlogPost[]> {
    const posts = await this.blogPostRepository.find();
    if (posts.length === 0) throw new NotFoundException('No blog posts found.');
    return posts;
  }

  async getById(id: number): Promise<BlogPost> {
    if (!id) return null;
    const post = await this.blogPostRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Post not found.');
    }
    return post;
  }

  async addPost(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
    const newPost = this.blogPostRepository.create(createBlogPostDto);
    return await this.blogPostRepository.save(newPost);
  }

  async modifyPost(
    id: number,
    updateBlogPostDto: UpdateBlogPostDto,
  ): Promise<BlogPost> {
    console.log('modifyPost: start');
    const post = await this.getById(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    this.blogPostRepository.merge(post, updateBlogPostDto);
    const savedPost = await this.blogPostRepository.save(post);
    return savedPost;
  }

  async removePost(id: number): Promise<BlogPost> {
    const post = await this.getById(id);
    if (!post) throw new NotFoundException('Post not found.');
    return await this.blogPostRepository.remove(post);
  }
}
