import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { CreateFilmType } from "../types";
import Header from "./header";


export default function CreateFilm() {

    const [createFilmBool, setCreateFilmBool] = useState(false) 

    const onFinish = (createdFilm: CreateFilmType) => {
        console.log('Success:', createdFilm)
        axios.post("http://localhost:4200/api/films", createdFilm)
            .then((response) => {
                console.log(response.status)
                alert("Вы успешно добавили фильм!")
                setCreateFilmBool(true)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    if (createFilmBool) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <Header />
            <div className="create-film-wrapper">
                <Form
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
                    onFinish={onFinish}
                    autoComplete="off"
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
                            Добавить
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}