import * as ACTION from '../types';

import { getMovieN, getMoviesAllN, getCastN, getSearchMovie } from '../../services/moviesService';

export const viewMoviesAll = () => async dispatch => {
    const request =  await getMoviesAllN();
     dispatch ({
         type: ACTION.RECEIVE_GET_MOVIES,
         payload: request.data.results
     })
}

export const viewMovie = (idMovie) => async dispatch => {
    const request =  await getMovieN(idMovie);
     dispatch ({ 
         type: ACTION.RECEIVE_GET_MOVIE,
         payload: request.data
     })
}

export const getCast = (idCast) => async dispatch => {
    const request = await getCastN(idCast);
     dispatch ({
         type: ACTION.RECEIVE_GET_CAST,
         payload: request.data.cast
     })
}

export const searchMovie = (word) => async dispatch => {
    const request =  await getSearchMovie(word)
     dispatch ({
         type: ACTION.RECEIVE_GET_SEARCH_MOVIES,
         payload: request.data.results
     })
}