import { FilmService } from './film.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get('/films')
  getData() {
    return this.filmService.getFilms();
  }
}