import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo-atletica.png';
import './style.css';

export default function Logo(){
    return(
        <div className="logo-container">
            <Link to={'/'}>
            <img src={LogoImg} alt="" />
            </Link>
        </div>
    )
}