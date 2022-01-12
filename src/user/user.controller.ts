import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req, Res, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {JwtService} from "@nestjs/jwt";
import {Request, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService , private jwtService: JwtService) {}



  @Post('/login')
  async login(@Body() crential: any) {
    let check = await this.userService.login(crential)
    if(check){
        const token = await this.jwtService.signAsync(crential)
        return  {
              success : true ,
              token
        }
    }
    else{
      return {
        success : false ,
        message : 'Login Failed'
      }
    }
  }


  

  @Post('/upload')
  @UseInterceptors(FileInterceptor('image'))
  async upload(@Req() req : Request , @Res() res : Response , @UploadedFile() file) {
          res.type("xlsx")
          res.send(file.buffer)
          
  }


  // @Get("/check-token")
  // async checkToken(@Req() req : Request){
  //   if (req.headers.authorization){
  //     try {
        
  //         let token = req.headers.authorization.split(" ")[1]
  //         let data  = await this.jwtService.verifyAsync(token)
  //         return {
  //           success : true ,
  //           data
  //         }
  //     }
  //     catch (err){
  //       return {
  //         success : false ,
  //         message : "Token Invalid"
  //       }
  //     }
  //   }
  //   else{
  //     return {
  //       success : false ,
  //       message : "Token does not exist"
  //     }
  //   }

      
  // }

  
  @Get('/find-user-by-id/:id')
  findUserByID(@Param('id') id : string) {
    return this.userService.findUserByID(id);
  }

  @Get('/search')
  searchUser(@Query('name') name : string) {
    return this.userService.searchUser(name);
  }


  @Post('/create-user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }



  @Get('/find-all')
  findAll() {
    return this.userService.findAll();
  }

  @Get('/find-one/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put('/update-user/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('/remove-user/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
