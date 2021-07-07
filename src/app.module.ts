import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { configService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
