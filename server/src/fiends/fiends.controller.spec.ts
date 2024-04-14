import { Test, TestingModule } from '@nestjs/testing';
import { FiendsController } from './fiends.controller';
import { FiendsService } from './fiends.service';

describe('FiendsController', () => {
  let controller: FiendsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiendsController],
      providers: [FiendsService],
    }).compile();

    controller = module.get<FiendsController>(FiendsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
