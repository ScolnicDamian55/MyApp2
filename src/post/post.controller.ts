import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PostService, PostEntity } from './post.service';
import { CreatePostDto } from './create-post.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: 'Создать пост' })
  @Post()
  create(@Body() createPostDto: CreatePostDto): PostEntity {
    return this.postService.create(
      createPostDto.title,
      createPostDto.content,
      createPostDto.userId,
    );
  }

  @ApiOperation({ summary: 'Получить все посты' })
  @Get()
  findAll(): PostEntity[] {
    return this.postService.findAll();
  }

  @ApiOperation({ summary: 'Получить пост по ID' })
  @Get(':id')
  findOne(@Param('id') id: string): PostEntity {
    return this.postService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновить пост' })
  @Put(':id')
  update(@Param('id') id: string, @Body() createPostDto: CreatePostDto): PostEntity {
    return this.postService.update(+id, createPostDto.title, createPostDto.content);
  }

  @ApiOperation({ summary: 'Удалить пост' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  @ApiOperation({ summary: 'Все посты конкретного пользователя' })
  @Get('user/:userId')
  findByUser(@Param('userId') userId: string): PostEntity[] {
    return this.postService.findByUser(+userId);
  }
}
