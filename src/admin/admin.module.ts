import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin } from './entities/admin.entity';
import { AdminSchema } from 'src/Schema/admin.schema';

@Module({
  imports : [MongooseModule.forFeature([{name: Admin.name, schema: AdminSchema }])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
