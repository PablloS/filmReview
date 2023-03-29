import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { CreateFilmType, Film } from "../types";
import Header from "./header";


export default function UpdateFilm() {

    const { id } = useParams<{ id?: string }>();

    const [film, setFilm] = useState<Film>()

    const [initialValues, setInitialValues] = useState({})

    const [updateFilmBool, setUpdateFilmBool] = useState(false)

    function formData(film: Film) {

        setInitialValues({
            title: film.title,
            synopsis: film.synopsis,
            rating: film.rating,
            year: film.year,
            genre: film.genre,
            director: film.director,
            poster: film.poster
        })
    }

    const onUpdate = (updatedFilm: CreateFilmType) => {
        axios.put(`http://localhost:4200/api/films/${id}`, updatedFilm)
            .then((response) => {
                console.log(response.status)
                alert("Вы успешно обновили данные!")
                setUpdateFilmBool(true)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    useEffect(() => {
        axios.get(`http://localhost:4200/api/films/${id}`)
            .then((response) => {
                setFilm(response.data)
                formData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    if (updateFilmBool) {
        return <Redirect to={`/films/${id}`} />
    }

    return (
        <div>
            <Header />
            <div className="create-film-wrapper">
                {film?.title && <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 700,
                    }}
                    onFinish={onUpdate}
                    initialValues={initialValues}

                >
                    <Form.Item
                        label="Название фильма"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите название!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Синопсис"
                        name="synopsis"
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Рейтинг"
                        name="rating"
                        rules={[
                            {
                                type: 'number',
                                min: 1,
                                max: 10,
                            }
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Год"
                        name="year"
                        rules={[
                            {
                                required: true,
                                type: 'number',
                                min: 1900,
                                max: 2100,
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Жанр"
                        name="genre"
                        rules={[
                            {
                                required: true,
                                message: 'Введите жанр фильма!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Режисёр"
                        name="director"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Постер"
                        name="poster"
                        rules={[
                            {
                                required: true,
                                message: 'Введите URL постера!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Обновить данные
                        </Button>
                    </Form.Item>
                </Form>}
            </div>
        </div>
    )
}