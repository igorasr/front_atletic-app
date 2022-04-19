import { useState } from 'react';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import './style.css';



export const LandingPage = ()=>{

    const [menuShow, setMenuShow] = useState(true);

return(
        <header id='header'>
            <div className="container" id='header__container'>
            <div id="header__logo">
                <strong>LOGO</strong>
            </div>
            <button id='arrow' >
                 {menuShow ? <BiDownArrowAlt/> : <BiUpArrowAlt/>} 
            </button>
            <nav id="header__navigation" >
                <ul id="header__menu" >
                    <li className="header__menu__item"><a href="http://www.google.com">Equipe</a></li>
                    <li className="header__menu__item"><a href="http://www.google.com">Historia</a></li>
                    <li className="header__menu__item"><a href="http://www.google.com">Eventos</a></li>
                    <li className="header__menu__item"><a href="http://www.google.com">Contatos</a></li>

                    <button id='header__button__login'>
                    login
                    </button>
                </ul>
            </nav>

            
            </div>
        </header>
)
}