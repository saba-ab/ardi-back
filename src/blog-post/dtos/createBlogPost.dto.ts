import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBlogPostDto {
  @ApiProperty({
    example: 'Godfather',
    description: 'name of the movie blog post',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    description: 'example of the content',
  })
  @IsString()
  content: string;

  @ApiProperty({
    example: 'drama',
    description: 'name of the movie blog post',
  })
  @IsString()
  category: string;
}
