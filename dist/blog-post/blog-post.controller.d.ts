import { CreateBlogPostDto } from './dtos/createBlogPost.dto';
import { UpdateBlogPostDto } from './dtos/updateBlogPost.dto';
import { BlogPostService } from './blog-post.service';
export declare class BlogPostController {
    private blogPostService;
    constructor(blogPostService: BlogPostService);
    getAll(): Promise<import("./entities/blogPost.entity").BlogPost[]>;
    getById(id: number): Promise<import("./entities/blogPost.entity").BlogPost>;
    addPost(createBlogPost: CreateBlogPostDto): Promise<import("./entities/blogPost.entity").BlogPost>;
    modifyPost(id: number, updateBlogPostDto: UpdateBlogPostDto): Promise<import("./entities/blogPost.entity").BlogPost>;
    removePost(id: number): Promise<import("./entities/blogPost.entity").BlogPost>;
}
