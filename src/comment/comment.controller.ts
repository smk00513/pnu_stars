import { Controller, Get, Inject, Query } from '@nestjs/common';

@Controller('comments')
export class CommentController {
  constructor(
    @Inject(CommentService) private readonly commentService: CommentService,
  ) {}

  @Get('/')
  async getPlaceList(
    @Query() dto: GetCommentListRequestDto,
  ): Promise<GetCommentListResponseDto> {
    const { placeName } = dto;

    const lists: CommentListView = await this.commentService.getCommentList({
      placeName,
    });

    return GetCommentListResponseDto.buildFromCommentListView(lists);
  }
}
