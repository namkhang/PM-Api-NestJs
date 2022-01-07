import { Module } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { MentorController } from './mentor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mentor, MentorSchema } from 'src/Schema/mentor.schema';
import { Admin, AdminSchema } from 'src/Schema/admin.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: Mentor.name, schema: MentorSchema}]) , MongooseModule.forFeature([{name: Admin.name, schema: AdminSchema}])] ,
  controllers: [MentorController],
  providers: [MentorService]
})
export class MentorModule {}
