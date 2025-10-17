import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Лого</div>
        <nav className="header__nav">
          <a href="#about" className="header__link">О нас</a>
          <a href="#how" className="header__link">Как это работает</a>
          <a href="#reviews" className="header__link">Отзывы</a>
          <a href="#contacts" className="header__link">Контакты</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;