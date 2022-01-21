import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdminService } from 'src/admin/admin.service';
import { testFunction } from 'src/helper/test';
import { ChatService } from './chat.service';
import { CreateChatDetailDto } from './dto/create-chat-detail.dto';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@ApiTags("Chat")
@Controller('chat')
export class ChatController {
  // constructor(private readonly chatService: ChatService , private readonly adminService: AdminService) {}
  constructor(private readonly chatService: ChatService) {}

  @Post('/create-chat')
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get('/find-all')
  findAll() {
    return this.chatService.findAll();

  }

  
  @Get('/find-content-chat/:id')
  findContentChat(@Param('id') id : string , @Query("content") content : string) {
    return this.chatService.findContentChat(id , content);

  }


  @Post("/create-detail-chat/:id")
  createChatDetail(@Body() body : CreateChatDetailDto , @Param("id") id : string){
      let date = new Date()
      const newChat : CreateChatDetailDto = {
        userID_chat : body.userID_chat ,
        fullname_chat : body.fullname_chat,
        createAt : `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
        image : body.image,
        chat_content : body.chat_content
      }
      return this.chatService.createChatDetail(body , id)
      
  }

  // @Get('/test')
  // Test() {
  //   let test = testFunction("dung")  // gọi hàm export
  //   return test
  // }

  
  // @Get('/test-admin')
  // Test() {
  //   return this.adminService.findAll() // gọi từ một service khác
  // }

  @Get('/find-one/:id')
  findOne(@Param('id') id: string) {
    return this.chatService.findOne(id);
  }

  @Get('/find-by-userID/:id')
  findByUserID(@Param('id') id: string) {
    return this.chatService.findByUserID(id);
  }

  @Put('/update-chat/:id')
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.update(id, updateChatDto);
  }

  @Delete('/remove-chat/:id')
  remove(@Param('id') id: string) {
    return this.chatService.remove(id);
  }
}
