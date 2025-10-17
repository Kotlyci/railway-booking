import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import './OrderPage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
          <section className="hero">
          <div className="hero__bg"></div>
          <div className="hero__container">
            <div className="hero__left">
              <h1 className="hero__title">Вся жизнь — <br />путешествие!</h1>
            </div>
            <div className="hero__right">
              <form className="hero-form" onSubmit={handleSubmit}>
                <div className="hero-form__row">
                  <div className="hero-form__group">
                    <label className="hero-form__label">Направление</label>
                    <input className="hero-form__input" type="text" placeholder="Откуда" required />
                  </div>
                  <div className="hero-form__group">
                    <label className="hero-form__label" style={{visibility: 'hidden'}}>Направление</label>
                    <input className="hero-form__input" type="text" placeholder="Куда" required />
                  </div>
                </div>
                <div className="hero-form__row">
                  <div className="hero-form__group">
                    <label className="hero-form__label">Дата туда</label>
                    <input className="hero-form__input" type="date" required />
                  </div>
                  <div className="hero-form__group">
                    <label className="hero-form__label">Дата обратно</label>
                    <input className="hero-form__input" type="date" required />
                  </div>
                </div>
                <button className="hero-form__button" type="submit">Найти билеты</button>
              </form>
            </div>
          </div>
        </section>

        {/* О НАС */}
        <section className="about-section">
          <div className="about-section__container">
            <h2 className="about-section__title">О НАС</h2>
            <div className="about-section__line"></div>
            <p className="about-section__text">
              Наш сервис позволяет быстро и удобно купить ж/д билеты онлайн. Мы работаем с крупнейшими перевозчиками и гарантируем лучшие цены и удобство покупки.<br /><br />
              Выберите маршрут, дату и оформите билет за пару минут!
            </p>
          </div>
        </section>

        {/* КАК ЭТО РАБОТАЕТ */}
        <section className="how-section">
          <div className="how-section__container">
            <h2 className="how-section__title">КАК ЭТО РАБОТАЕТ</h2>
            <div className="how-section__steps">
              <div className="how-section__step">
                <div className="how-section__icon">🔍</div>
                <div className="how-section__desc">Укажите маршрут</div>
              </div>
              <div className="how-section__step">
                <div className="how-section__icon">📅</div>
                <div className="how-section__desc">Выберите дату</div>
              </div>
              <div className="how-section__step">
                <div className="how-section__icon">🎫</div>
                <div className="how-section__desc">Оформите билет</div>
              </div>
            </div>
          </div>
        </section>

        {/* ОТЗЫВЫ */}
        <section className="reviews-section">
          <div className="reviews-section__container">
            <h2 className="reviews-section__title">Отзывы</h2>
            <div className="reviews-section__list">
              <div className="review-card">
                <img className="review-card__avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" />
                <div className="review-card__name">Екатерина Иванова</div>
                <div className="review-card__text">Очень удобно! Купила билет за 2 минуты, всё понятно и быстро.</div>
              </div>
              <div className="review-card">
                <img className="review-card__avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" />
                <div className="review-card__name">Виталий Сидоров</div>
                <div className="review-card__text">Отличный сервис, хорошие цены и поддержка!</div>
              </div>
              <div className="review-card">
                <img className="review-card__avatar" src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" />
                <div className="review-card__name">Мария Сергеевна</div>
                <div className="review-card__text">Пользуюсь только этим сервисом. Всё быстро и удобно!</div>
              </div>
            </div>
          </div>
        </section>

        {/* ФУТЕР */}
        <footer className="footer">
          <div className="footer__container">
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