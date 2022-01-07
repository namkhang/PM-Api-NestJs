import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MentorDocument = Mentor & Document;

@Schema()
export class Mentor {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  fullname: string;
  
  @Prop()
  MSGV: string;
  
  @Prop()
  address: string;
  
  @Prop()
  gender: string;

  @Prop()
  phone: string;

  @Prop()
  image: string;

  @Prop()
  level: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

}

export const MentorSchema = SchemaFactory.createForClass(Mentor);