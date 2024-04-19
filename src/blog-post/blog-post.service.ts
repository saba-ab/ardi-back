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

  async getAll() {
    const posts = await this.blogPostRepository.find();
    if (posts.length === 0) throw new NotFoundException('Blog posts not found');
    return posts;
  }
  async getById(id: number) {
    if (!id) {
      return null;
    }
    const post = await this.blogPostRepository.findOneBy({ id });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }
  async addPost(createBlogPost: CreateBlogPostDto) {
    const post = this.blogPostRepository.create(createBlogPost);
    return this.blogPostRepository.save(post);
  }
  async modifyPost(id: number, updateBlogPostDto: UpdateBlogPostDto) {
    const post = await this.getById(id);
    if (!post) throw new NotFoundException('Post not found');
    this.blogPostRepository.merge(post, updateBlogPostDto);
    return this.blogPostRepository.save(post);
  }
  async removePost(id: number) {
    const post = await this.getById(id);
    if (!post) throw new NotFoundException('Post not found');
    return this.blogPostRepository.remove(post);
  }
}
