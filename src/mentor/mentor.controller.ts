import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';
import { AdminService } from 'src/admin/admin.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Mentor")
@Controller('mentor')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}

  @Post('/create-mentor')
  create(@Body() createMentorDto: CreateMentorDto) {
    return this.mentorService.create(createMentorDto);
  }

  @Get('/find-all')
  findAll() {
    return this.mentorService.findAll();
  }

  @Get('/test-admin')
  testAdmin() {
    return this.mentorService.testAdmin();
  }

  @Get('/find-one/:id')
  findOne(@Param('id') id: string) {
    return this.mentorService.findOne(id);
  }

  @Put('/update-mentor/:id')
  update(@Param('id') id: string, @Body() updateMentorDto: UpdateMentorDto) {
    return this.mentorService.update(id, updateMentorDto);
  }

  @Delete('/remove-mentor/:id')
  remove(@Param('id') id: string) {
    return this.mentorService.remove(id);
  }
}
