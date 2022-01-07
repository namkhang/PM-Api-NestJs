import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
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

}

export const AdminSchema = SchemaFactory.createForClass(Admin);