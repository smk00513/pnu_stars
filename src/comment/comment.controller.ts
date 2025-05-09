import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CommentService } from 'src/comment/comment.service';
import { CreateCommentRequestDto } from 'src/comment/dto/CreateCommentRequestDto';
import { GetCommentListRequestDto } from 'src/comment/dto/GetCommentListRequestDto';
import { GetCommentListResponseDto } from 'src/comment/dto/GetCommentListResponseDto';
import { CommentListView } from 'src/comment/view/CommentListView';

@Controller('comments')
export class CommentController {
  constructor(
    @Inject(CommentService) private readonly commentService: CommentService,
  ) {}

  @Get('/')
  async getCommentList(
    @Query() dto: GetCommentListRequestDto,
  ): Promise<GetCommentListResponseDto> {
    const { placeName } = dto;

    const lists: CommentListView = await this.commentService.getCommentList({
      placeName,
    });

    return GetCommentListResponseDto.buildFromCommentListView(lists);
  }

  @Post('/:placeName')
  async createComment(
    @Param('placeName') placeName: string,
    @Body() dto: CreateCommentRequestDto,
  ): Promise<void> {
    const { content } = dto;

    await this.commentService.createComment({ placeName, content });
  }
}
