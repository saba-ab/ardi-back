import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './blog-post/entities/blogPost.entity';
@Module({
  imports: [
    BlogPostModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: [__dirname + '/**/**/*.entity{.ts, .js}', BlogPost],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
