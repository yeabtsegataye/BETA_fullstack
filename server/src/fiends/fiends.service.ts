import { Injectable } from '@nestjs/common';
import { CreateFiendDto } from './dto/create-fiend.dto';
import { UpdateFiendDto } from './dto/update-fiend.dto';

@Injectable()
export class FiendsService {
  create(createFiendDto: CreateFiendDto) {
    return 'This action adds a new fiend';
  }

  findAll() {
    return `This action returns all fiends`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fiend`;
  }

  update(id: number, updateFiendDto: UpdateFiendDto) {
    return `This action updates a #${id} fiend`;
  }

  remove(id: number) {
    return `This action removes a #${id} fiend`;
  }
}
