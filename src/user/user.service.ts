import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = [
        {
            "id": 1,
            "name": "John Deo",
            "email": "john@gmail.com",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Daniel Ezeali",
            "email": "daniel@gmail.com",
            "role": "ADMIN",
        },
       
    ]

     findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){
        if(role){
             return this.users.filter(user => user.role === role)
        }

        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id)

        return user
    }

    create(user: {name: string, email: string, role: 'INTERN' | 'ADMIN' | 'ENGINEER'}){
         const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
         const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
         }

         this.users.push(newUser)
         return newUser
    }

    update(id: number, updatedUser: {name?: string, email?: string, role?: 'INTERN' | 'ADMIN' | 'ENGINEER'}){
           this.users = this.users.map(user => {
                if(user.id === id){
                     return{...user, ...updatedUser}
                }

                return user
           })

           return this.findOne(id);
    }


    delete(id: number){
          const removedUser = this.findOne(id);

          this.users = this.users.filter(user => user.id !== id)
          return removedUser
    }
}
