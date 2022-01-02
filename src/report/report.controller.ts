import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post("/create-report")
  create(@Body() createReportDto: any) {
    // let parse = {...createReportDto}
    // delete parse['createAt']
    
    return this.reportService.create(createReportDto);
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
