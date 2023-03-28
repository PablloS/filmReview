import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { Film, FilmSchema } from './schema/film.schema';

@Module({
    imports: [MongooseModule.forFeature([{name : 'Film', schema: FilmSchema}])],
    controllers: [FilmController],
    providers: [FilmService],
  })
  export class FilmModule {}