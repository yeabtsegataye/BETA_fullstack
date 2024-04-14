import { PartialType } from '@nestjs/mapped-types';
import { CreateFiendDto } from './create-fiend.dto';

export class UpdateFiendDto extends PartialType(CreateFiendDto) {}
