import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { viewMovie, getCast } from '../../actions/functionsContents/moviesActions';
import Cards from '../Cards';
import './DetailMovie.scss';

const DetailMovie = (props) => {

    useEffect(() => {
        const {id} = props.match.params
        props.viewMovie(id);
        props.getCast(id)
    }, []);

    const {movie, cast } =  props.movie;

    return (
        <div className='DetailMovie row mt-5'>
                <h1 className="mb-5" >{movie.title}</h1>
            <div className="rowFlex">
                <Cards movie={movie} />
                <div className="description">
                    <p>{movie.overview}</p>
                    <div className='rowFlex'>
                    <div className='e-mail'>
                        <div className='circle' >
                            <div className='container-email'>
                                <i class="far fa-envelope"></i>
                            </div>
                        </div>
                        <p>e-mail</p>
                    </div>
                    <div className='e-mail'>
                        <div className='circle' >
                            <div className='container-email'>
                              <i class="fab fa-facebook-f"></i>
                            </div>
                        </div>
                        <p>Compartir</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

const mapStateToProps = state => ({
    movie: state.movies
})
 
export default connect(mapStateToProps, {viewMovie, getCast})(DetailMovie); 