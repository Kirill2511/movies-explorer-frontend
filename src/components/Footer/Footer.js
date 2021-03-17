import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__heading">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__media-info">
        <p className="footer__copyright">&copy;2020</p>
        <ul className="footer__links">
          <li className="footer__link-item">
            <a className="footer__link" href="http://ya.ru">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" href="http://ya.ru">
              Github
            </a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" href="http://ya.ru">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
