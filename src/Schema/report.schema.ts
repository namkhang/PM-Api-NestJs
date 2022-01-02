import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
  @Prop()
  reporterID: string;

  @Prop()
  reporterName: string;

  @Prop()
  projectID: string;
  
  @Prop()
  projectName: string;
  
  @Prop({type : Object})
  reportData: Object;
  
  @Prop()
  createAt: string;

  @Prop()
  reportComment: Array<any>;

  @Prop()
  reportName: string;

  @Prop()
  reportTemplateID: string;

  @Prop() 
  reportTemplateName: string;

  @Prop()
  reference: Array<string>;

}

export const ReportSchema = SchemaFactory.createForClass(Report);