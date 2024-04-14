import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FiendsService } from './fiends.service';
import { CreateFiendDto } from './dto/create-fiend.dto';
import { UpdateFiendDto } from './dto/update-fiend.dto';

@Controller('fiends')
export class FiendsController {
  constructor(private readonly fiendsService: FiendsService) {}

  @Post()
  create(@Body() createFiendDto: CreateFiendDto) {
    return this.fiendsService.create(createFiendDto);
  }

  @Get()
  findAll() {
    return this.fiendsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fiendsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFiendDto: UpdateFiendDto) {
    return this.fiendsService.update(+id, updateFiendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fiendsService.remove(+id);
  }
}
