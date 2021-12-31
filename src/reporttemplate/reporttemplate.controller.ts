import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReporttemplateService } from './reporttemplate.service';
import { CreateReporttemplateDto } from './dto/create-reporttemplate.dto';
import { UpdateReporttemplateDto } from './dto/update-reporttemplate.dto';

@Controller('reporttemplate')
export class ReporttemplateController {
  constructor(private readonly reporttemplateService: ReporttemplateService) {}

  @Post("/create-reporttemplate")
  create(@Body() createReporttemplateDto: CreateReporttemplateDto) {
    // createReporttemplateDto.description = "Report Template"
    return this.reporttemplateService.create(createReporttemplateDto);
  }

  @Get('/find-all')
  findAll() {
    return this.reporttemplateService.findAll();
  }

  @Get('/find-by-creatorID/:id')
  findByCreatorID(@Param('id') id : string) {
    return this.reporttemplateService.findBycreatorID(id);
  }


  @Get('/find-one/:id')
  findOne(@Param('id') id: string) {
    return this.reporttemplateService.findOne(id);
  }

  @Put('/update-reporttemplate/:id')
  update(@Param('id') id: string, @Body() updateReporttemplateDto: UpdateReporttemplateDto) {
    return this.reporttemplateService.update(id, updateReporttemplateDto);
  }

  @Delete('/remove-reporttemplate/:id')
  remove(@Param('id') id: string) {
    return this.reporttemplateService.remove(id);
  }
}
