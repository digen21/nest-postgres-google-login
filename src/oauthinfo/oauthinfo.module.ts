import { Module } from '@nestjs/common';
import { OauthinfoService } from './oauthinfo.service';
import { OauthinfoController } from './oauthinfo.controller';

@Module({
  controllers: [OauthinfoController],
  providers: [OauthinfoService],
})
export class OauthinfoModule {}
