import { Module } from '@nestjs/common';
import { FiendsService } from './fiends.service';
import { FiendsController } from './fiends.controller';

@Module({
  controllers: [FiendsController],
  providers: [FiendsService],
})
export class FiendsModule {}
