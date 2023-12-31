import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class CreateUserInput{
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @Field()
    @IsNotEmpty()
    age:number;

}

@InputType()
export class UpdateUserInput{
    @Field()
    @IsNotEmpty()
    userId:string;

    @Field()
    @IsOptional()
    age?:number;

    @Field({ nullable: true })
    @IsOptional()
    isSubscribed?:boolean;

}