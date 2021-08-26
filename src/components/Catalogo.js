import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { viewMoviesAll, searchMovie } from '../actions/functionsContents/moviesActions';
import Cards from './Cards';
import { getMoviesAllN } from '../services/moviesService';
import './Catologo.scss';

export const Catologo = (props) => {
const [value, setValue] = useState('');

useEffect(() => {
   props.viewMoviesAll();
}, []);

const onChangeMovie = ({target}) => {
    setValue(target.value);
}

const searchMovie = () => {
    !value.length ? props.viewMoviesAll() : props.searchMovie(value);
}

const {movies} = props;

    return (
        <div className="Catologo row animate__animated animate__fadeIn">
            <div className="container-search text-center mb-5">
                <label className="label-search" >Busca*  </label>
                <input type="text" name="search" onChange={onChangeMovie} className="input-search"  placeholder="" />
                <button  className="btn btn-success btn-sm" onClick={searchMovie} onKeyPress={searchMovie} >Buscar</button>
            </div>
            { !!movies.length ?
                movies.map((movie) => ( <Cards movie={movie} key={movie.id} /> ))
                : <div className="alert alert-danger" role="alert">
                    <p className="text-center" >¡No se encontraron resultados!</p>
                 </div>
              
            }
        </div>
    );
};

const mapStateToProps = state => ({
    movies: state.movies.movies
})
 
export default connect(mapStateToProps, { viewMoviesAll, searchMovie })(Catologo);