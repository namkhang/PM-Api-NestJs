import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ReportComment } from './dto/create-comment-report.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post("/create-report")
  create(@Body() createReportDto: any) {
    // let parse = {...createReportDto}
    // delete parse['createAt']
    
    return this.reportService.create(createReportDto);
  }


  @Post("/create-comment-report/:id")
  createCommentReport(@Body() body : ReportComment , @Param('id') id : string){
    let date = new Date()
      const data : ReportComment = {
          userName_Comment : body.userName_Comment ,
          content : body.userName_Comment ,
          userID_Comment : body.userID_Comment ,
          userImage_Comment : body.userID_Comment,
          createAt :  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

      }
      return this.reportService.createReportComment(data , id)
  }


  @Get("/find-all")
  findAll() {
    return this.reportService.findAll();
  }

  @Get('/find-one/:id')
  findOne(@Param('id') id: string) {
    return this.reportService.findOne(id);
  }

  @Put('/update-report/:id')
  update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    return this.reportService.update(id, updateReportDto);
  }

  @Delete('/remove-report/:id')
  remove(@Param('id') id: string) {
    return this.reportService.remove(id);
  }
}
