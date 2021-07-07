import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewPostDto } from './dto/newPost.dto';
import { Post } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository)
    private postsRepository: PostRepository,
  ) {}

  async getAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  async getById(id: number): Promise<Post> {
    return await this.postsRepository.findOne(id);
  }

  async create(newPostDto: NewPostDto): Promise<Post> {
    return await this.postsRepository.save(newPostDto);
  }
}
