import "react-calendar/dist/Calendar.css";
import { BsCalendarEvent, BsNewspaper, BsShop } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import Avatar from "../../../assets/images/img-avatar.png";
import Logo from "../../../assets/images/logo-atletica.png";
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
          <ul>
            <li>
              <a href="#">
                <BsCalendarEvent />
                <br />
                Eventos
              </a>
            </li>
            <li>
            <Link to={"feed"}>
            <BsNewspaper />
                <br />
                Feed
              </Link>
            
            </li>
            <li>
              <Link to={"shopping"}>
                <BsShop />
                <br />
                Produtos
              </Link>
            </li>
          </ul>
        </section>
        <section className="content">
          <Outlet/>
        </section>
      </main>
    </>
  );
}
