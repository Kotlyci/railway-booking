import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <span className="header__logo-text">Лого</span>
        </div>
        <nav className="header__nav">
          <Link
            to="/"
            className={`header__link${location.pathname === '/' ? ' header__link--active' : ''}`}
          >
            Главная
          </Link>
          <Link
            to="/search"
            className={`header__link${location.pathname === '/search' ? ' header__link--active' : ''}`}
          >
            Поиск билетов
          </Link>
          <Link to="/order" className="header__link">Оформить заказ</Link>
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