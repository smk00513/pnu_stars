export interface CommentListViewComment {
  placeName: string;
  content: string;
  createdAt: Date;
}

export interface CommentListView {
  count: number;
  comments: CommentListViewComment[];
}
