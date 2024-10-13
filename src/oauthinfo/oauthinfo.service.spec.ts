import { Test, TestingModule } from '@nestjs/testing';
import { OauthinfoService } from './oauthinfo.service';

describe('OauthinfoService', () => {
  let service: OauthinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthinfoService],
    }).compile();

    service = module.get<OauthinfoService>(OauthinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
