"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
async function bootstrap() {
    const httpsOptions = {
        key: (0, fs_1.readFileSync)('./secrets/private-key.pem'),
        cert: (0, fs_1.readFileSync)('./secrets/public-certificate.pem'),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Ardi Documentations')
        .setDescription('Ardi backend API documentations')
        .setVersion('1.0')
        .addTag('Ardi')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map