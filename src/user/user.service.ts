import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/Schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


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
