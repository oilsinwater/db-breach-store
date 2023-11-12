import { Test, TestingModule } from '@nestjs/testing';
import { BreachesController } from './breaches.controller';

describe('BreachesController', () => {
  let controller: BreachesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreachesController],
    }).compile();

    controller = module.get<BreachesController>(BreachesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
