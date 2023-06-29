import { Module } from "@nestjs/common";
import { UsersResolver } from "./resolver/users.resolver";
import { UserService } from "./service/users.service";

@Module({
    providers: [UsersResolver, UserService]
})
export class UsersModule{

}