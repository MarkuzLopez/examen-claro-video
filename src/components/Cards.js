import React from "react";
import { Link } from 'react-router-dom';

import NoImage from '../assets/no-image.jpg';

const Cards = ({ movie }) => {
    const imageMovie = movie.poster_path ? movie.poster_path : NoImage;
    return (
        <>
         <div className="col-md-3 mb-5 animate__animated animate__fadeIn">
            <Link to={`/detailMovie/${movie.id}`} >
               <img src={`http://image.tmdb.org/t/p/w500${imageMovie}`} className="img-fluid poster" alt={movie.title} />
            </Link>
         </div>
        </>
     );
}
 
export default Cards;