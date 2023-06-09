
export type Film = {
    _id: string
    title: string
    synopsis: string
    rating: number
    year: number
    genre: string
    director: string
    poster: string
    __v: number
}

export type CreateFilmType = {
    title: string
    synopsis: string
    rating: number
    year: number
    genre: string
    director: string
    poster: string
}

export type sortField = {
    sortfield: string, 
}
