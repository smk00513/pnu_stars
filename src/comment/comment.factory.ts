import { Injectable } from '@nestjs/common';
import { Comment } from 'src/comment/comment.entity';

@Injectable()
export class CommentFactory {
  constructor() {}

  create(params: { placeName: string; content: string }): Comment {
    const { placeName, content } = params;
    const now = new Date();

    const comment = new Comment();

    comment.placeName = placeName;
    comment.content = content;
    comment.createdAt = now;

    return comment;
  }
}
