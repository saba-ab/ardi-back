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
exports.BlogPostController = void 0;
const common_1 = require("@nestjs/common");
const createBlogPost_dto_1 = require("./dtos/createBlogPost.dto");
const updateBlogPost_dto_1 = require("./dtos/updateBlogPost.dto");
const swagger_1 = require("@nestjs/swagger");
const blog_post_service_1 = require("./blog-post.service");
let BlogPostController = class BlogPostController {
    constructor(blogPostService) {
        this.blogPostService = blogPostService;
    }
    getAll() {
        return this.blogPostService.getAll();
    }
    getById(id) {
        return this.blogPostService.getById(id);
    }
    addPost(createBlogPost) {
        return this.blogPostService.addPost(createBlogPost);
    }
    modifyPost(id, updateBlogPostDto) {
        return this.blogPostService.modifyPost(id, updateBlogPostDto);
    }
    removePost(id) {
        return this.blogPostService.removePost(id);
    }
};
exports.BlogPostController = BlogPostController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all posts' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogPostController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get post by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogPostController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Post' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createBlogPost_dto_1.CreateBlogPostDto]),
    __metadata("design:returntype", void 0)
], BlogPostController.prototype, "addPost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modify post' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateBlogPost_dto_1.UpdateBlogPostDto]),
    __metadata("design:returntype", void 0)
], BlogPostController.prototype, "modifyPost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Post' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogPostController.prototype, "removePost", null);
exports.BlogPostController = BlogPostController = __decorate([
    (0, swagger_1.ApiTags)('Blog Posts'),
    (0, common_1.Controller)('blog-post'),
    __metadata("design:paramtypes", [blog_post_service_1.BlogPostService])
], BlogPostController);
//# sourceMappingURL=blog-post.controller.js.map