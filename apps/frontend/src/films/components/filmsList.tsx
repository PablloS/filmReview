import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import axios from "axios"
import { useEffect, useState } from "react"
import { Film } from "../types"
import FilmComponent from "./film"
import Header from "./header"

export default function FilmsList() {

    const [films, setFilms] = useState<Film[]>([])

    useEffect(() => {
        axios.get('http://localhost:4200/api/films')
            .then((response) => {
                setFilms(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div className="film-page-wrapper">
            <Header />
            <div className='film-list'>
                <Card
                    style={{ width: 250, }}
                    cover={
                        <img
                            alt="poster"
                            src="https://cs10.pikabu.ru/post_img/big/2020/04/03/9/1585926667159676175.jpg" />
                    }><Meta
                        title="Добавить новый фильм"
                    />
                </Card>
                {films.map((film) => (
                    <FilmComponent key={film._id} _id={film._id}
                        title={film.title}
                        synopsis={film.synopsis}
                        rating={film.rating}
                        year={film.year}
                        genre={film.genre}
                        director={film.director}
                        poster={film.poster}
                        __v={film.__v} />
                ))}
            </div>
        </div>

    )
}
