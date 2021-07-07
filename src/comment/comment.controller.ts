import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { NewCommentDto } from './dto/newComment.dto';
import { Comment } from './comment.entity';

@Controller('post')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get(':id')
  getAll(@Param('id') id: number): Promise<Comment[]> {
    return this.commentService.getAllOfPost(id);
  }

  @Post()
  create(@Body() newPost: NewCommentDto) {
    return this.commentService.create(newPost);
  }
}
