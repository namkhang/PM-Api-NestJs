import { ApiProperty } from "@nestjs/swagger";

export class CreateReporttemplateDto {
   @ApiProperty({type : String , description : 'creatorName'})
   creatorName: string;
   @ApiProperty({type : String , description : 'createAt'})
   createAt: string;
   @ApiProperty({type : String , description : 'description'})
   description: string;
   @ApiProperty({type : Array , description : 'field'})
   field: Array<String>;
   @ApiProperty({type : String , description : 'reportTemplateName'})
   reportTemplateName: string;
   @ApiProperty({type : String , description : 'creatorID'})
   creatorID: string;
}