import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  userID: string;

  @Prop()
  userName: string;

  @Prop()
  content: string;
  
  @Prop()
  createAt: string;
  
  @Prop()
  image: string;
  
  @Prop()
  post_comment: Array<any>;

  @Prop()
  like: Number;

  @Prop()
  imagePost: string;

}

export const PostSchema = SchemaFactory.createForClass(Post);