import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatDocument } from 'src/Schema/chat.schema';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {

  constructor(@InjectModel(Chat.name) private chatModel : Model<ChatDocument>){}

  async create(createChatDto: CreateChatDto) {
    let newChat = await new this.chatModel(createChatDto).save()
    return {
      success : true ,
      data : newChat
    }
  }

  async findAll() {
    return {
      success : true ,
       data : await this.chatModel.find()
    }
  }

  
  async findByUserID(id : string) {
    let data = await this.chatModel.find()
    let result = data.filter(i => i.userInfor.includes(id))
    return {
      success : true ,
       data : result
    }
  }


  async findOne(id: string) {
    return {
      success : true ,
       data : await this.chatModel.findOne({_id : id})
    }
  }

  async update(id: string, body: any) {
    let date = new Date()
    let chat = await this.chatModel.findOne({_id : id})
    let createAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    body.createAt = createAt
    let newChat = [...chat.chat]
    newChat.push(body)
    await this.chatModel.updateOne({_id : id} , {chat : newChat})
    return {
      success : true ,
       data : await this.chatModel.findOne({_id : id})
    }
  }

  async remove(id: string) {
    await this.chatModel.deleteOne()
    return {
      success : true
    }
  }
}
