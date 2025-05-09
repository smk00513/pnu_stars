import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  constructor(
    @Inject(CommentRepository)
    private readonly commentRepository: CommentRepository,
  ) {}

  async GetCommentListRequestDto(dto: { placeName: string }) {
    const { placeList } = dto;

    const commentViews =
      await this.commentRepository.findByPlaceName(placeName);

    return commentViews;
  }
}
