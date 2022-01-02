import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportDocument } from 'src/Schema/report.schema';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportService {

  constructor(@InjectModel(Report.name) private reportModel: Model<ReportDocument>) {}

  async create(createReportDto: CreateReportDto) {
    const newData = await new this.reportModel(createReportDto).save()
    return {
      success : true ,
      data : newData
    }
  }

  async findAll() {
    return {
      success : true ,
      data : await this.reportModel.find()
    }
  }

  async findOne(id: string) {
    return {
      success : true ,
      data : await this.reportModel.findOne({_id : id})
    }
  }

  async update(id: string, updateReportDto: UpdateReportDto) {
    await this.reportModel.updateOne({_id : id} , {...updateReportDto})
    return {
      success : true ,
      data : await this.reportModel.findOne({_id : id})
    }
  }

  async remove(id: string) {
    await this.reportModel.deleteOne({_id : id})
    return {
      success : true
    }
  }
}
