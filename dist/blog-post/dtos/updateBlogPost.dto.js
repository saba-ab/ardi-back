"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogPostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const createBlogPost_dto_1 = require("./createBlogPost.dto");
class UpdateBlogPostDto extends (0, swagger_1.PartialType)(createBlogPost_dto_1.CreateBlogPostDto) {
}
exports.UpdateBlogPostDto = UpdateBlogPostDto;
//# sourceMappingURL=updateBlogPost.dto.js.map