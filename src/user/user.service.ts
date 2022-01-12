import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/Schema/admin.schema';
import { Mentor, MentorDocument } from 'src/Schema/mentor.schema';
import { User, UserDocument } from 'src/Schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument> , @InjectModel(Mentor.name) private mentorModel: Model<MentorDocument> ,@InjectModel(Admin.name) private adminModel: Model<AdminDocument>) {}



  async login(crential : any) {
    
    let check = await this.userModel.findOne({...crential})
    if (check){
        return true
    }
    else{
          return false
    }

  }



  async create(createUserDto: CreateUserDto) {
    let newUser = await new this.userModel(createUserDto).save()
    return {
       success : true ,
       data : newUser
    }
  }

  async findAll() {
    return {
      success : true ,
      data : await this.userModel.find()
    }
  }


  async findUserByID(id : string) {
   let dataUser : any = await this.userModel.findOne({_id : id})
   if(!dataUser){
      dataUser = await this.mentorModel.findOne({_id : id})
      if(!dataUser){
        dataUser = await this.adminModel.findOne({_id : id})
      }
   }
   return {
     success : true ,
     data : dataUser
   }
  }


  async searchUser(name : string) {
      const dataUser = await this.userModel.find()
      const dataMentor = await this.mentorModel.find()
      const dataAdmin = await this.adminModel.find()
      const data = [...dataUser , ...dataAdmin , ...dataMentor]
      const result = data.filter(i => i.fullname.toLowerCase().includes(name.toLowerCase()))
      return {
        success : true ,
        data : result
      }
}
 


  async findOne(id: string) {
    return {
      success : true ,
      data : await this.userModel.findOne({_id : id})
    } 
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.updateOne({_id : id} , {...updateUserDto})
    return {
      success : true ,
      data :  await this.userModel.findOne({_id : id})
    }
  }

  async remove(id: string) {
    await this.userModel.deleteOne({_id : id})
    return {
      success : true
    }
  }
}
