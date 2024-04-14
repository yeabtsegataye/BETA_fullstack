import { Module } from '@nestjs/common';
import { AdsService } from './ads.service';
import { AdsController } from './ads.controller';
import { adsProviders } from './ads.providers';
import { DatabaseModule  } from '../database/database.module';
@Module({
  imports: [DatabaseModule ],
  controllers: [AdsController],
  providers: [AdsService,
    ...adsProviders],
})
export class AdsModule {}
