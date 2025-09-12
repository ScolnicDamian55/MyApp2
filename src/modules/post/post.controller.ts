import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PostService, PostEntity } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto): PostEntity {
    return this.postService.create(
      createPostDto.title,
      createPostDto.content,
      createPostDto.userId,
    );
  }

  @Get()
  findAll(): PostEntity[] {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): PostEntity {
    return this.postService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createPostDto: CreatePostDto): PostEntity {
    return this.postService.update(+id, createPostDto.title, createPostDto.content);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.postService.remove(+id);
    return { message: `Post ${id} deleted` };
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string): PostEntity[] {
    return this.postService.findByUser(+userId);
  }
}
