import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    /* 
       GET /users
       GET /users/:id
       POST /users
       PATCH /users/:id
       DELETE /users/:id
    */

       @Get() //GET /users or /users?role=value
       findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){
          return[]
       }
       
       @Get('interns')
       findAllInterns(){
          return []
       }

       @Get(':id')// GET /users/:id
       findOne(@Param('id') id: string){
           return {id}
       }

       @Post()
       create(@Body() user:{}){
         return user
       }

        @Patch(':id')
        update(@Param('id') id: string, @Body() userUpdate: {}){
           return {id, ...userUpdate}
       }

        @Delete(':id')
         delete(@Param('id') id: string){
           return {id}
       }

}
