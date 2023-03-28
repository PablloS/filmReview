import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import { Film } from "../types";


export default function FilmComponent(filmData: Film) {
    return (
        <Card
            style={{width: 250,}}
            cover={
                <img 
                alt="poster" 
                src={filmData.poster} />
            }>
            <Meta
                title={filmData.title}
                description={filmData.year + ', ' + filmData.genre}
            />
        </Card>

    )
}