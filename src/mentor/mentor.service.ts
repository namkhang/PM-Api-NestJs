import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/Schema/admin.schema';
import { Mentor, MentorDocument } from 'src/Schema/mentor.schema';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';

@Injectable()
export class MentorService {

  constructor(@InjectModel(Mentor.name) private mentorModel : Model<MentorDocument> , @InjectModel(Admin.name) private adminModel : Model<AdminDocument>){}

  async create(createMentorDto: CreateMentorDto) {
    const newMentor = await new this.mentorModel(createMentorDto).save()
    return {
      success : true ,
      data : newMentor
    }
  }

  
  async testAdmin() {
    const admin = await this.adminModel.find()
    return {
      success : true ,
      data : admin
    }
  }

  async findAll() {
    return {
      success : true ,
      data : await this.mentorModel.find()
    }
  }

  async findOne(id: string) {
    return {
      success : true ,
      data : await this.mentorModel.findOne({_id : id})
    }
  }

  async update(id: string, updateMentorDto: UpdateMentorDto) {
   await this.mentorModel.updateOne({_id : id} , {...updateMentorDto})
   return {
    success : true ,
    data : await this.mentorModel.findOne({_id : id})
  }
  }

  async remove(id: string) {
    await this.mentorModel.deleteOne({_id : id})
    return {
      success : true
    }
  }
}
