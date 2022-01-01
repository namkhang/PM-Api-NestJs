import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
