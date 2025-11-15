import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService){}
    /* 
       GET /users
       GET /users/:id
       POST /users
       PATCH /users/:id
       DELETE /users/:id
    */

       @Get() //GET /users or /users?role=value
       findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){
          return this.usersService.findAll(role)
       }
       
       @Get('interns')
       findAllInterns(){
          return []
       }

       @Get(':id')// GET /users/:id
       findOne(@Param('id', ParseIntPipe) id: number){
        //    return this.usersService.findOne(+id) //+ is a uniary plus is used to convert stuff to a number
            return this.usersService.findOne(id)
       }

       @Post()
       create(@Body() createUserDto: CreateUserDto){
         return this.usersService.create(createUserDto)
       }

        @Patch(':id')
        update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto:UpdateUserDto){
           return this.usersService.update(id, updateUserDto)
       }

        @Delete(':id')
         delete(@Param('id', ParseIntPipe) id: number){
           return this.usersService.delete(id)
       }

}
