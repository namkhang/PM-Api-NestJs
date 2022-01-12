import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from 'src/Schema/post.schema';
import { CreateCommentPostDto } from './dto/create-comment-post.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {

  constructor(@InjectModel(Post.name) private postModel : Model<PostDocument>){}

  async create(createPostDto: CreatePostDto) {
    let newPost = await new this.postModel(createPostDto).save()
    return {
      success : true ,
      data : newPost
    }
  }

  async createCommentPost(body: CreateCommentPostDto , id : string) {
    let dataPost = await this.postModel.findOne({_id : id})
    let comment = [...dataPost.post_comment]
    comment.push(body)
    await this.postModel.updateOne({_id : id} , {post_comment : comment})
    return {
      success : true ,
      data :  await this.postModel.findOne({_id : id})
    }
  }


  async findAll() {
   return {
     success : true ,
     data : await this.postModel.find()
   }
  }

  async findOne(id: string) {
    return {
      success : true ,
      data : await this.postModel.findOne({_id : id})
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    await this.postModel.updateOne({_id : id} , {...updatePostDto})
    return {
      success : true ,
      data : await this.postModel.findOne({_id : id})
    }
  }

  async remove(id: string) {
    await this.postModel.deleteOne({_id : id})
    return {
      success : true
    }
  }
}
