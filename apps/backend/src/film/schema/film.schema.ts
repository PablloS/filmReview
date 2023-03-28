import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import { HydratedDocument } from "mongoose";

export type FilmDocument = HydratedDocument<Film>;


@Schema()
export class Film {

    @Prop({required: true})
    title : string

    @Prop()
    synopsis: string

    @Prop()
    rating: number

    @Prop()
    year: number

    @Prop()
    genre: string

    @Prop()
    director: string
}

export const FilmSchema = SchemaFactory.createForClass(Film)