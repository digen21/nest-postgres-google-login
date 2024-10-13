import { PartialType } from '@nestjs/mapped-types';
import { CreateOauthinfoDto } from './create-oauthinfo.dto';

export class UpdateOauthinfoDto extends PartialType(CreateOauthinfoDto) {}
