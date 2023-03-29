import { IsString } from "class-validator"

export class CreateFilmDto {
    @IsString()
    title: string

    @IsString()
    synopsis: string

    rating: number

    year: number

    @IsString()
    genre: string

    @IsString()
    director: string

    @IsString()
    poster: string
}