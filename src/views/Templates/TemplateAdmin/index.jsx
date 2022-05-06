import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsCalendarEvent, BsNewspaper, BsShop } from 'react-icons/bs';
import Avatar from "../../../assets/images/img-avatar.png";
import Logo from "../../../assets/images/logo-atletica.png";
import Card from '../../../components/Card';
import "./style.css";

export default function TemplateAdmin() {
  return (
    <>
      <header id="header">
        <nav>
          <div className="container" id="header-content">
            <div className="Logo">
              <img src={Logo} alt="" />
            </div>

            <ul id="header-menu">
              <li>
                <input
                  id="search"
                  type="text"
                  name=""
                  placeholder="Pesquisar"
                />
              </li>
              <li>
                <div className="Logo" id="avatar">
                  <img src={Avatar} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main id="main" className="container">
      <section id="main-navbar">
          <ul >
              <li>
                <a href="#">
                  <BsCalendarEvent/><br />
                  Eventos
                  </a>
              </li>
              <li>
                <a href="#">
                  <BsNewspaper/><br />
                  Feed
                  </a>
              </li>
              <li>
                <a href="#">
                  <BsShop/><br />
                  Produtos
                  </a>
              </li>
          </ul>
      </section>
        <section id="left">
          <div id="calendario">
          <Calendar/>


          </div>

        </section>
        <section id="center">

          <Card/>
          <Card/>

          <Card/>

          <Card/>

          <Card/>


        </section>
        <section id="right"></section>
      </main>
    </>
  );
}
