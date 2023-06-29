import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { User } from "../model/user.model";
import { UserService } from "../service/users.service";
import { GetUserArgs, GetUsersArgs } from "../dto/args/user.args";
import { CreateUserInput, UpdateUserInput } from "../dto/inputs/user.input";

@Resolver(() => User)
export class UsersResolver {
    constructor(
        private userService: UserService,
    ) { }

    @Query(() => User, { name: 'user', nullable: true })
    getUser(@Args() getUserArgs: GetUserArgs): User {
        return this.userService.getUser(getUserArgs);
    }

    @Query(() => [User], { name: 'users', nullable: 'items' })
    getUsers(@Args() getUserArgs: GetUsersArgs): User[] {
        return this.userService.getUsers(getUserArgs);
    }

    @Mutation( ()=> User)
    createUser(@Args('createUserData') createUserData: CreateUserInput): User{
        return this.userService.createUser(createUserData);
    }

    @Mutation( ()=> User)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User{
        return this.userService.updateUser(updateUserData);
    }

}