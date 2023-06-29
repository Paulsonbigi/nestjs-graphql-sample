import { Injectable } from "@nestjs/common";
import { User } from "../model/user.model";
import { v4 as uuidv4 } from 'uuid'
import { CreateUserInput, UpdateUserInput } from "../dto/inputs/user.input";
import { GetUserArgs, GetUsersArgs } from "../dto/args/user.args";

@Injectable()
export class UserService{
    private users: User[] = [];

    public createUser(createUserData: CreateUserInput): User{
        const user: User = {
            id: uuidv4(),
            ...createUserData
        }
        this.users.push(user)
        return user;
    }

    public updateUser(updateUserData: UpdateUserInput): User{
        const user = this.users.find(u => u.id === updateUserData.userId)

        Object.assign(user, updateUserData)
        return user;
    }

    public getUser(data: GetUserArgs): User{
        return this.users.find(u => u.id === data.userId)
    }

    public getUsers(data: GetUsersArgs): User[]{
        return data.userIds.map(userId => this.getUser({ userId}))
    }

    // public deleteUser(): User{
        
    // }
}