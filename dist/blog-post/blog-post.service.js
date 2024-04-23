"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostService = void 0;
const common_1 = require("@nestjs/common");
const blogPost_entity_1 = require("./entities/blogPost.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let BlogPostService = class BlogPostService {
    constructor(blogPostRepository) {
        this.blogPostRepository = blogPostRepository;
    }
    async getAll() {
        const posts = await this.blogPostRepository.find();
        if (posts.length === 0)
            throw new common_1.NotFoundException('No blog posts found.');
        return posts;
    }
    async getById(id) {
        if (!id)
            return null;
        const post = await this.blogPostRepository.findOneBy({ id });
        if (!post) {
            throw new common_1.NotFoundException('Post not found.');
        }
        return post;
    }
    async addPost(createBlogPostDto) {
        const newPost = this.blogPostRepository.create(createBlogPostDto);
        return await this.blogPostRepository.save(newPost);
    }
    async modifyPost(id, updateBlogPostDto) {
        console.log('modifyPost: start');
        const post = await this.getById(id);
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        this.blogPostRepository.merge(post, updateBlogPostDto);
        const savedPost = await this.blogPostRepository.save(post);
        return savedPost;
    }
    async removePost(id) {
        const post = await this.getById(id);
        if (!post)
            throw new common_1.NotFoundException('Post not found.');
        return await this.blogPostRepository.remove(post);
    }
};
exports.BlogPostService = BlogPostService;
exports.BlogPostService = BlogPostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(blogPost_entity_1.BlogPost)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BlogPostService);
//# sourceMappingURL=blog-post.service.js.map