import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProjectmanagementService } from './projectmanagement.service';
import { CreateProjectmanagementDto } from './dto/create-projectmanagement.dto';
import { UpdateProjectmanagementDto } from './dto/update-projectmanagement.dto';

@Controller('projectmanagement')
export class ProjectmanagementController {
  constructor(private readonly projectmanagementService: ProjectmanagementService) {}

  @Post("/create-project")
  create(@Body() createProjectmanagementDto: CreateProjectmanagementDto) {
    return this.projectmanagementService.create(createProjectmanagementDto);
  }

  @Get('/find-all')
  findAll() {
    return this.projectmanagementService.findAll();
  }

  @Get('/find-one/:id')
  findOne(@Param('id') id: string) {
    return this.projectmanagementService.findOne(id);
  }

  @Put('/update-project/:id')
  update(@Param('id') id: string, @Body() updateProjectmanagementDto: UpdateProjectmanagementDto) {
    return this.projectmanagementService.update(id, updateProjectmanagementDto);
  }

  @Delete('/remove-project/:id')
  remove(@Param('id') id: string) {
    return this.projectmanagementService.remove(id);
  }
}
