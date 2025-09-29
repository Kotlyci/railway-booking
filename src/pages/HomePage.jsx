import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Вся жизнь — <br />путешествие!</h1>
            <form className="hero__form" onSubmit={handleSubmit}>
              <input className="hero__input" type="text" placeholder="Откуда" />
              <input className="hero__input" type="text" placeholder="Куда" />
              <input className="hero__input" type="date" />
              <button className="hero__button" type="submit">Найти билеты</button>
            </form>
          </div>
        </section>

        {/* About section */}
        <section className="about">
          <h2 className="about__title">О нас</h2>
          <div className="about__line"></div>
          <p className="about__text">
            Наш сервис позволяет быстро и удобно купить ж/д билеты онлайн. Мы работаем с крупнейшими перевозчиками и гарантируем лучшие цены и удобство покупки.
          </p>
        </section>

        {/* How it works */}
        <section className="how">
          <h2 className="how__title">Как это работает</h2>
          <div className="how__steps">
            <div className="how__step">
              <div className="how__icon how__icon--search"></div>
              <div className="how__desc">Выберите маршрут</div>
            </div>
            <div className="how__step">
              <div className="how__icon how__icon--calendar"></div>
              <div className="how__desc">Выберите дату</div>
            </div>
            <div className="how__step">
              <div className="how__icon how__icon--ticket"></div>
              <div className="how__desc">Купите билет</div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="reviews">
          <h2 className="reviews__title">Отзывы</h2>
          <div className="reviews__list">
            <div className="review">
              <img className="review__avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" />
              <div className="review__name">Екатерина Иванова</div>
              <div className="review__text">Очень удобно! Купила билет за 2 минуты, всё понятно и быстро.</div>
            </div>
            <div className="review">
              <img className="review__avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" />
              <div className="review__name">Виталий Сидоров</div>
              <div className="review__text">Отличный сервис, хорошие цены и поддержка!</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer__content">
            <div className="footer__col">
              <div className="footer__title">О компании</div>
              <div className="footer__item">Контакты</div>
              <div className="footer__item">Партнёры</div>
              <div className="footer__item">Вакансии</div>
            </div>
            <div className="footer__col">
              <div className="footer__title">Поддержка</div>
              <div className="footer__item">Частые вопросы</div>
              <div className="footer__item">Обратная связь</div>
            </div>
            <div className="footer__col">
              <div className="footer__title">Мы в соцсетях</div>
                <div className="footer__socials">
                <a href="#" className="footer__social">VK</a>
                <a href="#" className="footer__social">Telegram</a>
                <a href="#" className="footer__social">YouTube</a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            © 2024 railway-booking.ru
          </div>
        </footer>
      </main>
    </>
  );
}

export default HomePage;