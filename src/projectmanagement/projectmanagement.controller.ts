import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProjectmanagementService } from './projectmanagement.service';
import { CreateProjectmanagementDto } from './dto/create-projectmanagement.dto';
import { UpdateProjectmanagementDto } from './dto/update-projectmanagement.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Project Management")
@Controller('projectmanagement')
export class ProjectmanagementController {
  constructor(private readonly projectmanagementService: ProjectmanagementService) {}

  @Post("/create-project")
  @ApiOkResponse({description : 'Created'})
  // @ApiCreatedResponse({description : 'Created'})
  @ApiBearerAuth('Authorization')
  @ApiBody({type : CreateProjectmanagementDto})
  create(@Body() createProjectmanagementDto: CreateProjectmanagementDto) {
    return this.projectmanagementService.create(createProjectmanagementDto);
  }

  @Get('/find-all')
  @ApiBearerAuth('Authorization')
  findAll() {
    return this.projectmanagementService.findAll();
  }

  @Get('/find-by-mentorID/:id')
  @ApiBearerAuth('Authorization')
  findByMentorID(@Param('id') id : string) {
    return this.projectmanagementService.findByMentorID(id);
  }

  @Get('/find-one/:id')
  @ApiBearerAuth('Authorization')
  findOne(@Param('id') id: string) {
    return this.projectmanagementService.findOne(id);
  }

  @Put('/update-project/:id')
  @ApiOkResponse({description : 'Updated'})
  // @ApiCreatedResponse({description : 'Created'})
  @ApiBearerAuth('Authorization')
  @ApiBody({type : UpdateProjectmanagementDto})
  @ApiBearerAuth('Authorization')
  update(@Param('id') id: string, @Body() updateProjectmanagementDto: UpdateProjectmanagementDto) {
    return this.projectmanagementService.update(id, updateProjectmanagementDto);
  }

  @Delete('/remove-project/:id')
  @ApiBearerAuth('Authorization')
  remove(@Param('id') id: string) {
    return this.projectmanagementService.remove(id);
  }
}
