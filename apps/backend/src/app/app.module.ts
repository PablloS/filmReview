import { FilmModule } from './../film/film.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FilmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
