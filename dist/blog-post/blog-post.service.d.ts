import { BlogPost } from './entities/blogPost.entity';
import { Repository } from 'typeorm';
import { UpdateBlogPostDto } from './dtos/updateBlogPost.dto';
import { CreateBlogPostDto } from './dtos/createBlogPost.dto';
export declare class BlogPostService {
    private blogPostRepository;
    constructor(blogPostRepository: Repository<BlogPost>);
    getAll(): Promise<BlogPost[]>;
    getById(id: number): Promise<BlogPost>;
    addPost(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost>;
    modifyPost(id: number, updateBlogPostDto: UpdateBlogPostDto): Promise<BlogPost>;
    removePost(id: number): Promise<BlogPost>;
}
