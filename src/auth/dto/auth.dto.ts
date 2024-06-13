import { ApiProperty } from '@nestjs/swagger'
import {IsEmail, IsString, MinLength} from 'class-validator'

export class AuthDto {
    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @MinLength(6, {
        message: 'password must be at least 6 characters long'
    })
    @IsString()
    password: string
}