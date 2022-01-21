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

  async createChatDetail(createChatDto: CreateChatDto , id :string) {
    let chat = (await this.chatModel.findOne({_id : id})).chat
    chat.push(createChatDto)
    await this.chatModel.updateOne({_id : id} , {chat})
    return {
      success : true ,
      data : await this.chatModel.findOne({_id : id})
    }
  }

  async findAll() {
    return {
      success : true ,
       data : await this.chatModel.find()
    }
  }

  async findContentChat(id: string , content : string){
      let dataChat = await this.chatModel.findOne({_id : id})
      let result = dataChat.chat.filter(i => i.chat_content.toLowerCase().includes(content.toLowerCase()))
      return {
        success : true ,
        data : result
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
