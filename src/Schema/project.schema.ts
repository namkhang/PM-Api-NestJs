import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop()
  projectName: string;

  @Prop()
  mentorID: string;

  @Prop()
  mentorName: string;
  
  @Prop()
  createAt: string;
  
  @Prop()
  creatorID: string;
  
  @Prop()
  creatorName: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

}

export const ProjectSchema = SchemaFactory.createForClass(Project);