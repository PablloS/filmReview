import { UpdateFilmDto } from './dto/update-film.dto';
import { CreateFilmDto } from './dto/create-film.dto';
import { filmDto } from './dto/filmDto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilmService {

    private readonly films : filmDto[] = []

    getAllFilms() : filmDto[] {
        return this.films
    }

    create(film : CreateFilmDto) {
        this.films.push(film)
    }

    getFilmById(id : number) {
        let film = this.films.find(film => film.id == id)
        return film
    }

    updateFilm(id : number, UpdateFilmDto : UpdateFilmDto) {
        let film = this.films.find(film => film.id == id)
        film.synopsis = UpdateFilmDto.synopsis
        film.rating = UpdateFilmDto.rating
        film.title = UpdateFilmDto.title
    }

    deleteFilm(id : number) {
        let index = this.films.findIndex(film => film.id == id)
        if (index != -1) {
            this.films.splice(index, 1)
        }

    }

}