import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProjectmanagementService } from './projectmanagement.service';
import { ProjectmanagementController } from './projectmanagement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from 'src/Schema/project.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleWare } from 'src/middleware/auth.middleware';

@Module({
  imports: [MongooseModule.forFeature([{name: Project.name, schema: ProjectSchema }]) ,
  JwtModule.register({
    secret: 'secret',
    signOptions: {expiresIn: '1d'}
})
],
  controllers: [ProjectmanagementController],
  providers: [ProjectmanagementService]
})
export class ProjectmanagementModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleWare)
      .forRoutes({path : 'projectmanagement/*' , method : RequestMethod.ALL})
  }
}
