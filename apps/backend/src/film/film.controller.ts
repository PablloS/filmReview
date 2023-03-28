import { UpdateFilmDto } from './dto/update-film.dto';
import { CreateFilmDto } from './dto/create-film.dto';
import { FilmService } from './film.service';
import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { Delete, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('films')
export class FilmController {
  constructor(private filmService: FilmService) {}

  @Get()
  getAllFilms() {
    return this.filmService.getAllFilms();
  }

  @Get(':id') 
  getFilmByID(@Param('id') id: string) {
    return this.filmService.getFilmById(id)
  }

  @Post()
  create(@Body() CreateFilmDto : CreateFilmDto) {
    this.filmService.create(CreateFilmDto)
  }

  @Put(':id')
  update(@Param('id') id : string, @Body() UpdateFilmDto : UpdateFilmDto) {
    this.filmService.updateFilm(id, UpdateFilmDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id : string) {
    this.filmService.deleteFilm(id)
  }
}