import React from 'react';
import Header from '../components/Header';

function SearchPage() {
  return (
    <>
      <Header />
      <main className="main search-main">
        <div className="search-layout">
          {/* Сайдбар с фильтрами */}
          <aside className="search-sidebar">
            <form className="filter-form">
              <h3 className="filter-form__title">Фильтр</h3>
              <div className="filter-form__group">
                <label className="filter-form__label">Тип вагона</label>
                <div className="filter-form__radios">
                  <label>
                    <input type="radio" name="type" defaultChecked /> Все
                  </label>
                  <label>
                    <input type="radio" name="type" /> Купе
                  </label>
                  <label>
                    <input type="radio" name="type" /> Плацкарт
                  </label>
                  <label>
                    <input type="radio" name="type" /> Люкс
                  </label>
                  <label>
                    <input type="radio" name="type" /> Сидячий
                  </label>
                </div>
              </div>
              <div className="filter-form__group">
                <label className="filter-form__label">Цена</label>
                <input type="range" min="500" max="10000" className="filter-form__range" />
              </div>
              <div className="filter-form__group">
                <label className="filter-form__label">Доп. услуги</label>
                <div>
                  <label>
                    <input type="checkbox" /> Бельё
                  </label>
                  <label>
                    <input type="checkbox" /> Кондиционер
                  </label>
                  <label>
                    <input type="checkbox" /> Wi-Fi
                  </label>
                </div>
              </div>
              <button className="button filter-form__button" type="submit">Применить</button>
            </form>
          </aside>

          {/* Список билетов */}
          <section className="tickets-list">
            <h2 className="tickets-list__title">Доступные билеты</h2>
            <div className="tickets-list__items">
              {/* Карточка билета */}
              <div className="ticket-card">
                <div className="ticket-card__info">
                  <div className="ticket-card__route">
                    <span>Москва</span>
                    <span className="ticket-card__arrow">→</span>
                    <span>Санкт-Петербург</span>
                  </div>
                  <div className="ticket-card__datetime">
                    <span>10:00</span> — <span>18:00</span>
                  </div>
                  <div className="ticket-card__date">01.08.2024</div>
                </div>
                <div className="ticket-card__details">
                  <div className="ticket-card__type">Купе</div>
                  <div className="ticket-card__price">3 500 ₽</div>
                  <button className="button ticket-card__button">Выбрать</button>
                </div>
              </div>
              {/* Ещё карточки билетов (скопируйте блок выше для примера) */}
            </div>
            {/* Пагинация */}
            <div className="tickets-list__pagination">
              <button className="pagination__btn">←</button>
              <button className="pagination__btn pagination__btn--active">1</button>
              <button className="pagination__btn">2</button>
              <button className="pagination__btn">3</button>
              <button className="pagination__btn">→</button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default SearchPage;