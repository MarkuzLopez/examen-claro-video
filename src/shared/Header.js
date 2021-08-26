import React from './Header';
import ImgHeader from '../assets/claro-video.jpeg';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = (props) => {

    return ( 
        <div className="Header">
            <div className="img-logo text-left">
                <Link to={'/'}>
                    <img src={ImgHeader} alt={ImgHeader} />
                </Link>
            </div>
        </div>
     );
}
 
export default Header;
