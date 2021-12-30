import { Module } from '@nestjs/common';
import { ProjectmanagementService } from './projectmanagement.service';
import { ProjectmanagementController } from './projectmanagement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from 'src/Schema/project.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Project.name, schema: ProjectSchema }])],
  controllers: [ProjectmanagementController],
  providers: [ProjectmanagementService]
})
export class ProjectmanagementModule {}
