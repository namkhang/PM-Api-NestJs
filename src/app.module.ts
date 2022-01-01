import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectmanagementModule } from './projectmanagement/projectmanagement.module';
import { ReporttemplateModule } from './reporttemplate/reporttemplate.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProjectmanagementModule , MongooseModule.forRoot('mongodb://localhost/ProjectManagement'), ReporttemplateModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
