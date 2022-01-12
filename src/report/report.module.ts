import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Report } from './entities/report.entity';
import { ReportSchema } from 'src/Schema/report.schema';
import { AuthMiddleWare } from 'src/middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports :  [MongooseModule.forFeature([{name: Report.name, schema: ReportSchema }]) , 
  JwtModule.register({
    secret: 'secret',
    signOptions: {expiresIn: '1d'}
})
],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleWare)
    .forRoutes({path : 'report/*' , method : RequestMethod.ALL})
}
}
