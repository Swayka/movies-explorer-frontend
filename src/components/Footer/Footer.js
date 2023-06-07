import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__caption">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container footer__container_date">
        <p className="footer__text footer__text_adaptiv">&copy;&nbsp;{new Date().getFullYear()}</p>
        <div className="footer__container footer__container_caption">
          <p className="footer__text ">Яндекс.Практикум</p>
          <p className="footer__text">Github</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
