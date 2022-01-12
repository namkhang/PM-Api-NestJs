import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreateCommentPostDto } from './dto/create-comment-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/create-post')
  create(@Body() body: CreatePostDto) {
    let date = new Date()
    let data : CreatePostDto = {
      content : body.content,
      image : body.image,
      imagePost : body.imagePost,
      like : body.like,
      userID : body.userID,
      userName : body.userName,
      post_comment : body.post_comment ,
      createAt : `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    return this.postService.create(data);
  }


  @Post('/create-comment-post/:id')
  createCommentPost(@Body() body: CreateCommentPostDto , @Param('id') id : string) {
    let date = new Date()
    let data : CreateCommentPostDto = {
      content_comment : body.content_comment,
      image_comment : body.image_comment,
      userID_comment : body.userID_comment,
      userName_commnent : body.userName_commnent,
      createAt_comment : `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
   
    return this.postService.createCommentPost(data , id);
  }


  @Get('/find-all')
  findAll() {
    return this.postService.findAll();
  }

  @Get('/find-one/:id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Put('/update-post/:id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete('/remove-post/:id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
