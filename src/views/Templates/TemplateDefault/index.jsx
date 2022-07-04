import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsCalendarEvent, BsShopWindow } from 'react-icons/bs';
import { CgFeed } from 'react-icons/cg';
import { Link, Outlet } from 'react-router-dom';
import Logo from "../../../components/Logo";
import "./style.css";

export default function TemplateDefault() {
  const [session, setSession] = useState();

  useEffect(()=>{
    setSession(JSON.parse(localStorage.getItem('session')))
  },[])

  return (
    <>
      <header>
        <div className="container">
          <Logo />
          <div className="right">
            <div className="search">
              <input
                type="text"
                name="search-input"
                id="search-input"
                placeholder="Pesquise"
              />
            </div>

            <div className="profile">
              <div className="avatar">
                <img src="" alt="" />
              </div>
              <div className="user-infos">
                <p id="userName">{session?.name}</p>
                <small id="userSubtitle">Castores</small>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container">
        <nav className="container" id="menu">
          <ul className="ListMenu">
          <li>
            <Link to={'/'}>
              <BsCalendarEvent size={25}/><br />Eventos
            </Link>
          </li>
          <li>
            <Link to={'/app'}>
              <CgFeed size={25}/><br />Feed
            </Link>
          </li>
          <li>
            <Link to={'shopping'}>
              <BsShopWindow size={25}/><br />Produtos
            </Link>
          </li>
          </ul>
        </nav>
        <div className="body">
          <aside className="container-aside">
            <Calendar/>
          </aside>
          <div className="feed">
          
            <Outlet/>
          </div>
        </div>
      </main>
    </>
  );
}
