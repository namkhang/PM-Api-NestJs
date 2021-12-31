import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportTemplateDocument = Report_Templates & Document;

@Schema()
export class Report_Templates {
  @Prop()
  creatorName: string;

  @Prop()
  createAt: string;

  
  @Prop()
  field: Array<string>;

  @Prop()
  description: string;
  
  @Prop()
  reportTemplateName: string;
  
  @Prop()
  creatorID: string;
  

}

export const ReportTemplateSchema = SchemaFactory.createForClass(Report_Templates);