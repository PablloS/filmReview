import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Film } from "../types"
import FilmComponent from "./film"
import Header from "./header"

export default function FilmsList() {

    const [films, setFilms] = useState<Film[]>([])

    useEffect(() => {
        axios.get('http://localhost:4200/api/films')
            .then((response) => {
                setFilms(response.data.reverse())
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div className="film-page-wrapper">
            <Header />
            <div className='film-list'>
                <Link to="/create">
                    <Card className="film-component-card"
                        style={{ width: 250, height: 470,}}
                        cover={
                            <img
                                alt="poster"
                                src="https://cs10.pikabu.ru/post_img/big/2020/04/03/9/1585926667159676175.jpg" />
                        }><Meta
                            title="Добавить новый фильм"
                        />
                    </Card>
                </Link>
                {films.map((film) => (
                    <Link key={film._id} to={`/films/${film._id}`}>
                        <FilmComponent  _id={film._id}
                        title={film.title}
                        synopsis={film.synopsis}
                        rating={film.rating}
                        year={film.year}
                        genre={film.genre}
                        director={film.director}
                        poster={film.poster}
                        __v={film.__v} />
                    </Link>
                    
                ))}
            </div>
        </div>

    )
}
