import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  fullname: string;
  
  @Prop()
  MSSV: string;
  
  @Prop()
  address: string;
  
  @Prop()
  gender: string;

  @Prop()
  phone: string;

  @Prop()
  image: string;

  @Prop()
  className: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

}

export const UserSchema = SchemaFactory.createForClass(User);