import { Button, Card, Form, Select } from "antd"
import Meta from "antd/es/card/Meta"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Film, sortField } from "../types"
import FilmComponent from "./film"
import Header from "./header"


export default function FilmsList() {

    const [films, setFilms] = useState<Film[]>([])
    const [sortState, setSortState] = useState("")

    useEffect(() => {
        axios.get('http://localhost:4200/api/films')
            .then((response) => {
                let tempFilm = []
                switch (sortState) {
                    case "название":
                        tempFilm = response.data
                            .sort((a: Film, b: Film) => a.title > b.title ? 1 : -1)
                        setFilms(tempFilm)
                        break;
                    case "год":
                        tempFilm = response.data
                            .sort((a: Film, b: Film) => a.year < b.year? 1 : -1)
                        setFilms(tempFilm)
                        break;
                    case "рейтинг":
                        tempFilm = response.data
                            .sort((a: Film, b: Film) => a.rating < b.rating? 1 : -1)
                        setFilms(tempFilm)
                        break;
                    case "жанр":
                        tempFilm = response.data
                            .sort((a: Film, b: Film) => a.genre > b.genre ? 1 : -1)
                        setFilms(tempFilm)
                        break;
                    default:
                        setFilms(response.data.reverse())
                        break;
                }

            })
            .catch((err) => {
                console.log(err)
            })

    }, [sortState])


    function sortData(sortName: sortField) {
        setSortState(sortName.sortfield)
    }


    return (
        <div className="film-page-wrapper">
            <Header />
            <div className="film-list-sort">
                <Form
                    name="sort-form"
                    onFinish={sortData}
                    style={{
                        maxWidth: 600,
                        color: "black"
                    }}
                    initialValues={{
                        sortfield: "по умолчанию"
                    }}
                >
                    <Form.Item name="sortfield">
                        <Select
                            placeholder="Сортировать по..."
                            options={
                                [
                                    { value: "название", label: "название" },
                                    { value: "год", label: "год" },
                                    { value: "жанр", label: "жанр" },
                                    { value: "рейтинг", label: "рейтинг" },
                                    { value: "по умолчанию", label: "по умолчанию" },
                                ]
                            }>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Отсортировать
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='film-list'>
                <Link to="/create">
                    <Card className="film-component-card"
                        style={{ width: 250, height: 470, }}
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
                        <FilmComponent _id={film._id}
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
