import { Test, TestingModule } from '@nestjs/testing';
import { ComfortController } from './comfort.controller';

describe('ComfortController', () => {
  let controller: ComfortController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComfortController],
    }).compile();

    controller = module.get<ComfortController>(ComfortController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
