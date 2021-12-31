import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from 'src/Schema/project.schema';
import { CreateProjectmanagementDto } from './dto/create-projectmanagement.dto';
import { UpdateProjectmanagementDto } from './dto/update-projectmanagement.dto';

@Injectable()
export class ProjectmanagementService {
  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

  async create(createProjectmanagementDto: CreateProjectmanagementDto) {
      const newProject = new this.projectModel(createProjectmanagementDto)
      const data = await newProject.save()
      return {
        success : true ,
        data
      }
   
  }

  async findAll()  {
    return {
      success : true ,
      data : await this.projectModel.find()
    }
  }

  async findByMentorID(id : string){
      let data = await this.projectModel.find({mentorID : id})
      return {
        success : true ,
        data
      }
  }

  async findOne(id: string) {    
      return {
        success : true ,
        data : await this.projectModel.findOne({_id : id}).exec()
      }
  }

  async update(id: string, updateProjectmanagementDto: UpdateProjectmanagementDto) {
    await this.projectModel.updateOne({_id : id} , {...updateProjectmanagementDto})
    const newProject = await this.projectModel.findOne({_id : id}).exec()
    return {
      success : true ,
      data : newProject
    }
  }
  async remove(id: string) {
    return this.projectModel.deleteOne({_id : id})
  }
}
