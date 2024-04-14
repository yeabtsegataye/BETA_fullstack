import { User } from "src/users/entities/user.entity";

export class CreatePostDto {
  hashtag: string;
  Description: string;
  IMG: string;
  Comment_count: number;
  Like_count: number;
  Shear_count: number;
  posterID: User;
}
