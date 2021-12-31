import { Test, TestingModule } from '@nestjs/testing';
import { ReporttemplateController } from './reporttemplate.controller';
import { ReporttemplateService } from './reporttemplate.service';

describe('ReporttemplateController', () => {
  let controller: ReporttemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporttemplateController],
      providers: [ReporttemplateService],
    }).compile();

    controller = module.get<ReporttemplateController>(ReporttemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
