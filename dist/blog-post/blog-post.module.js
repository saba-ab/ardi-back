"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostModule = void 0;
const common_1 = require("@nestjs/common");
const blog_post_service_1 = require("./blog-post.service");
const blog_post_controller_1 = require("./blog-post.controller");
const typeorm_1 = require("@nestjs/typeorm");
const blogPost_entity_1 = require("./entities/blogPost.entity");
let BlogPostModule = class BlogPostModule {
};
exports.BlogPostModule = BlogPostModule;
exports.BlogPostModule = BlogPostModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([blogPost_entity_1.BlogPost])],
        providers: [blog_post_service_1.BlogPostService],
        controllers: [blog_post_controller_1.BlogPostController],
    })
], BlogPostModule);
//# sourceMappingURL=blog-post.module.js.map