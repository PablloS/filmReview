import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator"

export class UpdateFilmDto {
    @MaxLength(150)
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    synopsis: string

    @IsNumber()
    @IsNotEmpty()
    rating: number

    @IsNumber()
    @IsNotEmpty()
    year: number

    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    genre: string

    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    director: string

    @IsString()
    @IsNotEmpty()
    poster: string
}