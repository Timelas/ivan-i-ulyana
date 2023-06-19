import React from "react";
import { nameman, namewoman } from '../../vendor/const';
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">До скорой встречи,</p>
      <div className="footer__names">
        <p className="footer__name">{nameman}</p>
        <p className="footer__name footer__name-end">{namewoman}</p>
      </div>
    </section>
  );
}

export default Footer;