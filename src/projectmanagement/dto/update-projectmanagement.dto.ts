import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectmanagementDto } from './create-projectmanagement.dto';

export class UpdateProjectmanagementDto extends PartialType(CreateProjectmanagementDto) {}
