import { Test, TestingModule } from '@nestjs/testing';
import { ReporttemplateService } from './reporttemplate.service';

describe('ReporttemplateService', () => {
  let service: ReporttemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporttemplateService],
    }).compile();

    service = module.get<ReporttemplateService>(ReporttemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
