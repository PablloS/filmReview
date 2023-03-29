import { Descriptions } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Film } from "../types";
import Header from "./header";


export default function FilmPage() {

    const { id } = useParams<{ id?: string }>();

    const [film, setFilm] = useState<Film>()

    useEffect(() => {
        axios.get(`http://localhost:4200/api/films/${id}`)
            .then((response) => {
                setFilm(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (
        <div className="film-page-wraper">
            <Header />
            <div className="film-page-content">
                <img src={film?.poster} alt="poster " />
                <div className="film-page-descr">
                    <Descriptions title={(<h1 className="film-page-title">{film?.title}</h1>)}>
                        <Descriptions.Item label="Режисёр">{film?.director}</Descriptions.Item>
                        <Descriptions.Item label="Жанр">{film?.genre}</Descriptions.Item>
                        <Descriptions.Item label="Рейтинг фильма">{film?.rating}</Descriptions.Item>
                        <Descriptions.Item label="Год выпуска">{film?.year}</Descriptions.Item>
                    </Descriptions>
                    <Descriptions title="Описание">
                        <Descriptions.Item label="">{film?.synopsis}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </div>
    )
}