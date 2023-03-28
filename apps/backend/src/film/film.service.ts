import { UpdateFilmDto } from './dto/update-film.dto';
import { CreateFilmDto } from './dto/create-film.dto';
import { filmDto } from './dto/filmDto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class FilmService {

    constructor(@InjectModel('Film') private filmsModel: Model<filmDto>) { }

    async getAllFilms(): Promise<filmDto[]> {
        const filmData = await this.filmsModel.find();
        if (!filmData || filmData.length == 0) {
            throw new NotFoundException('films not found :(')
        }
        return filmData
    }

    async create(film: CreateFilmDto): Promise<filmDto> {
        const newFIlm = await new this.filmsModel(film)
        return newFIlm.save()
    }

    async getFilmById(id: string): Promise<filmDto> {
        const film = await this.filmsModel.findById(id).exec()
        if (!film) {
            throw new NotFoundException(`Film ${id} not found :(`)
        }
        return film
    }

    async updateFilm(id: string, UpdateFilmDto: UpdateFilmDto): Promise<filmDto> {
        const updatedFilm = await this.filmsModel.findByIdAndUpdate(id,
            UpdateFilmDto, { new: true })
        if (!updatedFilm) {
            throw new NotFoundException(`Film ${id} not found :(`)
        }
        return updatedFilm
    }

    async deleteFilm(id: string): Promise<filmDto> {
        const deletedFilm = await this.filmsModel.findByIdAndDelete(id)
        if (!deletedFilm) {
            throw new NotFoundException(`Film ${id} not found :(`)
        }
        return deletedFilm
    }

}