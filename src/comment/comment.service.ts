import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRepository } from './comment.repository';
import { NewCommentDto } from './dto/newComment.dto';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentRepository)
    private commentsRepository: CommentRepository,
  ) {}

  async getAllOfPost(id: number): Promise<Comment[]> {
    return await this.commentsRepository.find({
      where: {
        post: id,
      },
    });
  }

  async create(newPostDto: NewCommentDto) {
    return await this.commentsRepository.save(newPostDto);
  }
}
