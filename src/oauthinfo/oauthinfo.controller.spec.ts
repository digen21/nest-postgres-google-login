import { Test, TestingModule } from '@nestjs/testing';
import { OauthinfoController } from './oauthinfo.controller';
import { OauthinfoService } from './oauthinfo.service';

describe('OauthinfoController', () => {
  let controller: OauthinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OauthinfoController],
      providers: [OauthinfoService],
    }).compile();

    controller = module.get<OauthinfoController>(OauthinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
