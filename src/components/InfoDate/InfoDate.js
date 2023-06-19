import React from "react";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <p className="info-date__who">Дорогие</p>
        <p className="info-date__who">родные и друзья!</p>
        <p className="info-date__text">Приглашаем вас разделить с нами этот важный момент нашей жизни. Мы будем благодарны за вашу поддержку и внимание в день нашей свадьбы!</p>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__line1"></div>
        <div className="info-date__line2"></div>
        <div className="info-date__check-in">
          <p className="info-date__what">Регистрация и банкет</p>
        </div>
        <p className="info-date__day-week">Суббота</p>
        <div className="info-date__day">
          <p className="info-date__number">16</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">09</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">23</p>
        </div>
        <p className="info-date__time">В 15.00</p>
        <div className="info-date__banquet">
          <p className="info-date__where">Лофт «весенний»<br />Санкт-Петербург,<br />Наб. Обводного канала 199</p>
        </div>
        <div className="info-date__figure-left"></div>
        <div className="info-date__figure-right"></div>
      </div>
    </section>
  );
}

export default InfoDate;