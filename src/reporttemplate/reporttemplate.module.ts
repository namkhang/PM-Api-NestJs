import { Module } from '@nestjs/common';
import { ReporttemplateService } from './reporttemplate.service';
import { ReporttemplateController } from './reporttemplate.controller';
import { Report_Templates, ReportTemplateSchema } from 'src/Schema/reporttemplate.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [MongooseModule.forFeature([{name: Report_Templates.name, schema: ReportTemplateSchema }])],
  controllers: [ReporttemplateController],
  providers: [ReporttemplateService]
})
export class ReporttemplateModule {}
