import { PartialType } from '@nestjs/mapped-types';
import { CreateReporttemplateDto } from './create-reporttemplate.dto';

export class UpdateReporttemplateDto extends PartialType(CreateReporttemplateDto) {}
