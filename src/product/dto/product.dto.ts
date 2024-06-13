import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ProductDto {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsString()
    image: string

    @ApiProperty()
    @IsString()
    categoryId: string

    @ApiProperty()
    @IsNumber()
    price: number
}