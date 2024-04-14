import { Inject, Injectable } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { Repository } from 'typeorm';
import { Ad } from './entities/ad.entity';

@Injectable()
export class AdsService {
  constructor(
    @Inject('ADS_REPOSITORY')
    private Ad: Repository<Ad>,
  ) {}
  /////////////////////
  create(createAdDto: CreateAdDto) {
    console.log(createAdDto.Price)
    const data = this.Ad
    .createQueryBuilder()
    .insert()
    .into(Ad)
    .values({
      Title: createAdDto.Title,
      Description: createAdDto.Description,
      Price: createAdDto.Price,
      IMG: createAdDto.IMG
    })
    .execute()

    return data;
  }
///////////////
  findAll() {
    const data = this.Ad.find()
    return data
  }
//////////////////
  findOne(id: number) {
    return `This action returns a #${id} ad`;
  }
////////////////////
  update(id: number, updateAdDto: UpdateAdDto) {
    return `This action updates a #${id} ad`;
  }
/////////////////////
  remove(id: number) {
    const data = this.Ad 
    .createQueryBuilder()
    .delete()
    .from(Ad)
    .where("id = :id", { id })
    .execute()

    return data;
  }
}
