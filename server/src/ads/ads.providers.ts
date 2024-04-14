import { DataSource } from 'typeorm';
import { Ad } from './entities/ad.entity';

export const adsProviders = [
  {
    provide: 'ADS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Ad),
    inject: ['DATA_SOURCE'],
  },
];
