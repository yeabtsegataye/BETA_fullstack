import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(Posts)
    private Posts: Repository<Posts>,
  ) {}
///////////////////////////
  create(createPostDto: CreatePostDto) {
    const data = this.Posts
    .createQueryBuilder()
    .insert()
    .into(Posts)
    .values({
      hashtag :createPostDto.hashtag,
      Description: createPostDto.Description,
      IMG: createPostDto.IMG,
      Comment_count: createPostDto.Comment_count,
      Like_count: createPostDto.Like_count,
      Shear_count: createPostDto.Shear_count,
      // posterID: createPostDto.posterID
    })
    .execute()
  return data
   }
//////////////////////////////
  findAll() {
    const data = this.Posts.find()
    return data;
  }
////////////////////////////////
  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }
/////////////////////////////////
  remove(id: number) {
    console.log(id)
    const data = this.Posts.
    createQueryBuilder()
    .delete()
    .from(Posts)
    .where("id = :id", { id })
    .execute()

    return data;
  }
}
