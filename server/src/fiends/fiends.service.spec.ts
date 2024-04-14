import { Test, TestingModule } from '@nestjs/testing';
import { FiendsService } from './fiends.service';

describe('FiendsService', () => {
  let service: FiendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiendsService],
    }).compile();

    service = module.get<FiendsService>(FiendsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
