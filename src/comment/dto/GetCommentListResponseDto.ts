import { CommentListView } from 'src/comment/view/CommentListView';

class GetCommentListResponseCommentDto {
  placeName: string;
  content: string;
  createdAt: Date;
}

export class GetCommentListResponseDto {
  count: number;
  comments: GetCommentListResponseCommentDto[];

  static buildFromCommentListView(view: CommentListView) {
    const res = new GetCommentListResponseDto();

    res.count = view.count;
    res.comments = view.comments.map((comment) => {
      const res = new GetCommentListResponseCommentDto();

      res.placeName = comment.placeName;
      res.content = comment.content;
      res.createdAt = comment.createdAt;

      return res;
    });

    return res;
  }
}
