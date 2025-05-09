import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/comment/comment.entity';
import { CommentFactory } from 'src/comment/comment.factory';
import { CommentListView } from 'src/comment/view/CommentListView';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @Inject(CommentFactory) private readonly commentFactory: CommentFactory,
  ) {}

  async getCommentList(dto: { placeName: string }): Promise<CommentListView> {
    const { placeName } = dto;

    const [comments, count] = await this.commentRepository.findAndCountBy({
      placeName,
    });

    return {
      count,
      comments: comments.map((comment) => ({
        placeName: comment.placeName,
        content: comment.content,
        createdAt: comment.createdAt,
      })),
    };
  }

  async createComment(dto: {
    placeName: string;
    content: string;
  }): Promise<void> {
    const { placeName, content } = dto;

    const comment = this.commentFactory.create({ placeName, content });

    await this.commentRepository.save(comment);
  }
}
