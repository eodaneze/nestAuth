import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

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
       findOne(@Param('id') id: string){
           return this.usersService.findOne(+id) //+ is a uniary plus is used to convert stuff to a number
       }

       @Post()
       create(@Body() user:{name: string, email: string, role: 'INTERN' | 'ADMIN' | 'ENGINEER'}){
         return this.usersService.create(user)
       }

        @Patch(':id')
        update(@Param('id') id: string, @Body() userUpdate: {name?: string, email?: string, role?: 'INTERN' | 'ADMIN' | 'ENGINEER'}){
           return this.usersService.update(+id, userUpdate)
       }

        @Delete(':id')
         delete(@Param('id') id: string){
           return this.usersService.delete(+id)
       }

}
