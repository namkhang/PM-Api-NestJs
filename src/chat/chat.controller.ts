import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { testFunction } from 'src/helper/test';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

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
