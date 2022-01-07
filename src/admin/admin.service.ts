import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminDocument } from 'src/Schema/admin.schema';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {

  constructor(@InjectModel(Admin.name) private adminModel : Model<AdminDocument>){}

  async create(createAdminDto: CreateAdminDto) {
    
    let newAdmin = await new this.adminModel(createAdminDto).save()
    return {
      success : true ,
      data : newAdmin
    }
  }

  async findAll() {
    return {
        success : true ,
        data : await this.adminModel.find()
    }
  }

  async findOne(id: string) {
    return {
      success : true  ,
      data : await this.adminModel.findOne({_id : id})
    }
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    await this.adminModel.updateOne({_id : id} , {...updateAdminDto})
    return {
      success : true ,
      data : await this.adminModel.findOne({_id : id})
    }
  }

  async remove(id: string) {
    await this.adminModel.deleteOne({_id : id})
    return {
      success : true
    }
  }
}
