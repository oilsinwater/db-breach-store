import { Test, TestingModule } from '@nestjs/testing';
import { BreachesService } from './breaches.service';

describe('BreachesService', () => {
  let service: BreachesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreachesService],
    }).compile();

    service = module.get<BreachesService>(BreachesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
