import http from '../constants/config';

let paramsMovie = {
    api_key: '1c07947338be9b264658ad8dbbcbb30e',
    language: 'es-ES',
    page: '1'
}

export const getMoviesAllN = () => http.get(`movie/now_playing`, { params: paramsMovie });

export const getMovieN = (id) => http.get(`movie/${id}`, { params: paramsMovie });

export const getCastN = (id) => http.get(`movie/${id}/credits`, {params: paramsMovie});

export const getSearchMovie = (word) => {
    let params = ({...paramsMovie, page: '1', query: word});
    return http.get(`search/movie`, { params })
}