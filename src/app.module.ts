import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectmanagementModule } from './projectmanagement/projectmanagement.module';

@Module({
  imports: [ProjectmanagementModule , MongooseModule.forRoot('mongodb://localhost/ProjectManagement')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
