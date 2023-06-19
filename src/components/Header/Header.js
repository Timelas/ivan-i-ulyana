import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import { nameman, namewoman, date } from '../../vendor/const';
import "./Header.css";
import newlyweds from "../../images/newlyweds.jpeg"

function Header() {
  const resize = useMediaQuery('(min-width: 700px)');
  return (
    <section className="header" id="home">
      {
        resize ? (
          <div className="header__desctop">
            <h1 className="header__title">Приглашение на свадьбу</h1>
            <img src={newlyweds} className="header__image" alt="молодожены"></img>
            <div className="header__info">
              <p className="header__info_names">{nameman}</p>
              <p className="header__info_names">&nbsp;&nbsp;&nbsp;&nbsp;{namewoman}</p>
              <p className="header__info_date">{date}</p>
            </div>
          </div>
        ) : (
          <div className="header__mobile">
            <div className="header__info-mobile">
              <p className="header__info_names-mobile">{nameman}</p>
              <p className="header__info_names-mobile">&nbsp;&nbsp;&nbsp;&nbsp;{namewoman}</p>
            </div>
            <div className="header__block">
              <h1 className="header__title">Приглашение на свадьбу</h1>
              <img src={newlyweds} className="header__image-mobile" alt="молодожены"></img>
            </div>
            <p className="header__info_date-mobile">{date}</p>
          </div>
        )
      }
    </section>
  );
}

export default Header;