import { FilmModule } from './../film/film.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FilmModule, MongooseModule.forRoot("mongodb://127.0.0.1:27017/api",
    { dbName: "filmdb" })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
