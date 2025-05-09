import { IsNotEmpty, IsString } from 'class-validator';

export class GetCommentListRequestDto {
  @IsNotEmpty()
  @IsString()
  placeName: string;
}
