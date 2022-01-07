import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { Chat } from './entities/chat.entity';
import { ChatSchema } from 'src/Schema/chat.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from 'src/Schema/admin.schema';
import { AdminService } from 'src/admin/admin.service';

@Module({
  // imports : [MongooseModule.forFeature([{name: Chat.name, schema: ChatSchema }]) , MongooseModule.forFeature([{name: Admin.name, schema: AdminSchema }])] ,
   imports : [MongooseModule.forFeature([{name: Chat.name, schema: ChatSchema }])] ,  
  controllers: [ChatController],
  providers: [ChatService]
  // providers: [ChatService , AdminService] // có thể import service khác cho module này
})
export class ChatModule {}
