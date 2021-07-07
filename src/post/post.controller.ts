import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { NewPostDto } from './dto/newPost.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAll(): Promise<Post[]> {
    return this.postService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Post> {
    return this.postService.getById(id);
  }

  @Post()
  create(@Body() newPost: NewPostDto): Promise<Post> {
    return this.postService.create(newPost);
  }
}
