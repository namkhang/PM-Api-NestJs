import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report_Templates, ReportTemplateDocument } from 'src/Schema/reporttemplate.schema';
import { CreateReporttemplateDto } from './dto/create-reporttemplate.dto';
import { UpdateReporttemplateDto } from './dto/update-reporttemplate.dto';

@Injectable()
export class ReporttemplateService {

  constructor(@InjectModel(Report_Templates.name) private reportTemplateModel: Model<ReportTemplateDocument>) {}

  async create(body: any) {
    const newReportTemplate = await new this.reportTemplateModel(body).save()
    return {
      success : true,
      data : newReportTemplate
    }

  }

  async findAll() {
      return {
        success : true ,
        data : await this.reportTemplateModel.find()
      }
  }

  async findBycreatorID(id : string) {
    return {
      success : true ,
      data : await this.reportTemplateModel.find({creatorID : id})
    }
}

  
  async findOne(id: string) {
    return {
      success : true ,
      data : await this.reportTemplateModel.findOne({_id : id})
    }
  }

  async update(id: string, updateReporttemplateDto: UpdateReporttemplateDto) {
    await this.reportTemplateModel.updateOne({_id : id} , {...updateReporttemplateDto})
    return {
      success : true ,
      data : await this.reportTemplateModel.findOne({_id : id})
    }
  }

  async remove(id: string) {
    await this.reportTemplateModel.deleteOne({_id : id})
    return {
      success : true
    }
  }
}
