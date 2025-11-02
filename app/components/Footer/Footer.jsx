import React from "react";
import "./footer.scss";
import {
  IoCall,
  IoLocationSharp,
  IoLogoFacebook,
  IoMail,
} from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__main-content">
          <div className="footer__column footer__column-about about-col">
            <div className="about-col__logo-container">
              <img
                src="/logo-white.png"
                alt="logo"
                className="about-col__logo"
              />
            </div>
            <p className="about-col__text">
              Мы объединяем медицину, науку и технологии для повышения качества
              лечения.
            </p>
            <div className="about-col__social-links">
              <a href="#" className="social-link social-link--facebook">
                <IoLogoFacebook />
              </a>
              <a href="#" className="social-link social-link--instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link social-link--telegram">
                <FaTelegram />
              </a>
            </div>
          </div>

          {/* 2. O nas (Menu ustuni) */}
          <div className="footer__column footer__column--nav nav-col">
            <h4 className="nav-col__title">О нас</h4>
            <ul className="nav-col__list">
              <li>
                <a href="#" className="nav-col__link">
                  Отделения
                </a>
              </li>
              <li>
                <a href="#" className="nav-col__link">
                  Наши врачи
                </a>
              </li>
              <li>
                <a href="#" className="nav-col__link">
                  Фотогалерея
                </a>
              </li>
              <li>
                <a href="#" className="nav-col__link">
                  Наши технологии
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Klientam (Menu ustuni) */}
          <div className="footer__column footer__column--nav nav-col">
            <h4 className="nav-col__title">Клиентам</h4>
            <ul className="nav-col__list">
              <li>
                <a href="#" className="nav-col__link">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="nav-col__link">
                  Сотрудничество
                </a>
              </li>
              <li>
                <a href="#" className="nav-col__link">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="nav-col__link">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Kontakti (Ma'lumotlar ustuni) */}
          <div className="footer__column footer__column--contacts contacts-col">
            <h4 className="contacts-col__title">Контакты</h4>
            <ul className="contacts-col__list">
              <li className="contacts-col__item contacts-col__item-phone">
                <span className="item-icon">
                  <IoCall size={16} />
                </span>
                +998 (71) 224-13-13
              </li>
              <li className="contacts-col__item contacts-col__item--phone">
                <span className="item-icon">
                  <IoCall size={16} />
                </span>
                +998 (71) 224-85-00
              </li>
              <li className="contacts-col__item contacts-col__item--email">
                <span className="item-icon">
                  <IoMail size={16} />
                </span>
                info@sihatkoz.uz
              </li>
              <li className="contacts-col__item contacts-col__item--address">
                <span className="item-icon">
                  <IoLocationSharp size={16} />
                </span>
                Узбекистан, г. Ташкент, Юнус Абад, кв-л 4, ул. А. Дониш № 4.
              </li>
            </ul>
          </div>
        </div>

        {/* Pastki qism: Kopirayt va Dizayn */}
        <div className="footer__bottom">
          <hr className="footer__divider" />
          <div className="footer__copyright-row">
            <p className="footer__copyright">© 2009 - 2024 СП ООО SIHAT KO'Z</p>
            <img src="/company-logo.png" alt="company logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
