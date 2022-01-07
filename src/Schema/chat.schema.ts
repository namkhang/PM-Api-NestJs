import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  userInfor: Array<any>;

  @Prop()
  chat: Array<any>;


}

export const ChatSchema = SchemaFactory.createForClass(Chat);