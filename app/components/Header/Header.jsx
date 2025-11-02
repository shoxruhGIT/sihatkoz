"use client";

import React, { useState } from "react";
import "./header.scss";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";
import "flag-icons/css/flag-icons.min.css";
import Language from "../Language/Language";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__top-bar-container">
          <div className="header__top-bar-content">
            <p className="header__top-bar-text">
              <span>
                <IoLocationSharp size={22} />
              </span>
              г. Ташкент, Юнус Абад кв-л 4, ул А. Дониш № 4,
            </p>
            <p className="header__top-bar-text">
              <span>
                <IoCall size={22} />
              </span>
              +998 (71) 224-13-13
            </p>
            <p className="header__top-bar-text">
              <span>
                <IoMail size={22} />
              </span>
              info@sihatkoz.uz
            </p>
          </div>
          <button className="header__top-bar-btn">КОНСУЛЬТАЦИЯ</button>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="header__mobile-container">
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              <li className="header__mobile-nav-item">
                <a href="/" className="header__mobile-nav-link">
                  Услуги
                </a>
                <div className="mobile-arrow">
                  <ChevronDown />
                </div>
              </li>
              <li className="header__mobile-nav-item">
                <a href="/" className="header__mobile-nav-link">
                  Состояния глаз
                </a>
                <div className="mobile-arrow">
                  <ChevronDown />
                </div>
              </li>
              <li className="header__mobile-nav-item">
                <a href="/" className="header__mobile-nav-link">
                  Врачи
                </a>
                <div className="mobile-arrow">
                  <ChevronDown />
                </div>
              </li>
              <li className="header__mobile-nav-item">
                <a href="/" className="header__mobile-nav-link">
                  Цены и Условия оплаты
                </a>
                <div className="mobile-arrow">
                  <ChevronDown />
                </div>
              </li>
            </ul>
          </nav>
          <div className="header__mobile-info">
            <a href="/" className="header__mobile-info-item">
              Отзывы
            </a>
            <a href="/" className="header__mobile-info-item">
              FAQ
            </a>
            <a href="/" className="header__mobile-info-item">
              Контакты
            </a>
          </div>
          <Language />
        </div>
      )}

      <div className="header__container">
        <img className="header__container-logo" src="/logo.png" alt="logo" />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="header__mobile-icon"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className="header__container-list">
          <nav className="header__container-nav">
            <ul className="header__container-nav-list">
              <li className="header__container-nav-item">
                <a href="/" className="header__container-nav-link">
                  Услуги
                </a>
              </li>
              <li className="header__container-nav-item">
                <a href="/" className="header__container-nav-link">
                  Состояния глаз
                </a>
              </li>
              <li className="header__container-nav-item">
                <a href="/" className="header__container-nav-link">
                  Врачи
                </a>
              </li>
              <li className="header__container-nav-item">
                <a href="/" className="header__container-nav-link">
                  Цены и Условия оплаты
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__container-info">
            <a href="/" className="header__container-info-item">
              Отзывы
            </a>
            <a href="/" className="header__container-info-item">
              FAQ
            </a>
            <a href="/" className="header__container-info-item">
              Контакты
            </a>
          </div>
          <select className="header__container-lang" name="lang" id="lang">
            <option className="lang-item" value="RU">
              iOS 18.4RU
            </option>
            <option className="lang-item" value="EN">
              EN
            </option>
            <option className="lang-item" value="UZ">
              UZ
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
