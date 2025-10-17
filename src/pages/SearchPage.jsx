import React from 'react';
import Header from '../components/Header';

function SearchPage() {
  return (
    <>
      <Header />
      <main className="main search-main">
        <div className="searchbar">
            <form className="searchbar__form">
              <div className="searchbar__group">
                <label className="searchbar__label">Откуда</label>
                <input className="searchbar__input" type="text" placeholder="Москва" defaultValue="Москва" />
              </div>
              <div className="searchbar__group">
                <label className="searchbar__label">Куда</label>
                <input className="searchbar__input" type="text" placeholder="Санкт-Петербург" defaultValue="Санкт-Петербург" />
              </div>
              <div className="searchbar__group">
                <label className="searchbar__label">Туда</label>
                <input className="searchbar__input" type="date" defaultValue="2024-08-01" />
              </div>
              <div className="searchbar__group">
                <label className="searchbar__label">Обратно</label>
                <input className="searchbar__input" type="date" defaultValue="2024-08-10" />
              </div>
              <button className="searchbar__button" type="submit">Найти билеты</button>
            </form>
          </div>
        <div className="search-layout">
          {/* Сайдбар с фильтрами */}
          <aside className="sidebar-filters">
            <form className="sidebar-filters__form">
              <div className="sidebar-filters__group">
                <label className="sidebar-filters__label">Дата поездки</label>
                <input type="date" className="sidebar-filters__input" defaultValue="2018-08-30" />
              </div>
              <div className="sidebar-filters__group">
                <label className="sidebar-filters__label">Дата возвращения</label>
                <input type="date" className="sidebar-filters__input" defaultValue="2018-09-09" />
              </div>
              <div className="sidebar-filters__group sidebar-filters__group--types">
                <label className="sidebar-filters__label">Тип вагона</label>
                <div className="sidebar-filters__switches">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="switch__slider"></span>
                    <span className="switch__text">Купе</span>
                  </label>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                    <span className="switch__text">Плацкарт</span>
                  </label>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                    <span className="switch__text">Сидячий</span>
                  </label>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                    <span className="switch__text">Люкс</span>
                  </label>
                </div>
              </div>
              <div className="sidebar-filters__group sidebar-filters__group--services">
                <label className="sidebar-filters__label">Услуги</label>
                <div className="sidebar-filters__switches">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                    <span className="switch__text">Wi-Fi</span>
                  </label>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                    <span className="switch__text">Кондиционер</span>
                  </label>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                    <span className="switch__text">Бельё</span>
                  </label>
                </div>
              </div>
              <div className="sidebar-filters__group sidebar-filters__group--cost">
                <label className="sidebar-filters__label">Стоимость</label>
                <div className="sidebar-filters__range-row">
                  <input type="range" min="500" max="10000" defaultValue="1920" className="sidebar-filters__range" />
                  <div className="sidebar-filters__range-values">
                    <span>от</span>
                    <span className="sidebar-filters__range-value">1920</span>
                    <span>до</span>
                    <span className="sidebar-filters__range-value">5330</span>
                  </div>
                </div>
              </div>
              <div className="sidebar-filters__group sidebar-filters__group--directions">
                <label className="sidebar-filters__checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="sidebar-filters__checkbox-custom"></span>
                  Туда
                </label>
                <label className="sidebar-filters__checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="sidebar-filters__checkbox-custom"></span>
                  Обратно
                </label>
              </div>
            </form>
          </aside>

          {/* Список билетов */}
          <section className="tickets-list">
            <h2 className="tickets-list__title"></h2>
            <h2 className="tickets-list__title">Доступные билеты</h2>
            <div className="tickets-list__items">
              {/* 1 */}
              <div className="ticket-card">
                <div className="ticket-card__icon">
                  <span className="ticket-card__icon-train">🚆</span>
                  <div className="ticket-card__number">116С</div>
                </div>
                <div className="ticket-card__main">
                  <div className="ticket-card__row">
                    <span className="ticket-card__time">00:10</span>
                    <span className="ticket-card__arrow">→</span>
                    <span className="ticket-card__time">09:52</span>
                  </div>
                  <div className="ticket-card__stations">
                    <span>Москва</span>
                    <span>Санкт-Петербург</span>
                  </div>
                  <div className="ticket-card__stations-sub">
                    <span>Курский вокзал</span>
                    <span>Ладожский вокзал</span>
                  </div>
                </div>
                <div className="ticket-card__types">
                  <div className="ticket-card__type-row">
                    <span>Сидячий</span>
                    <span className="ticket-card__seats">32</span>
                    <span className="ticket-card__price">1 920 ₽</span>
                  </div>
                  <div className="ticket-card__type-row">
                    <span>Плацкарт</span>
                    <span className="ticket-card__seats">24</span>
                    <span className="ticket-card__price">2 530 ₽</span>
                  </div>
                  <div className="ticket-card__type-row">
                    <span>Купе</span>
                    <span className="ticket-card__seats">20</span>
                    <span className="ticket-card__price">2 920 ₽</span>
                  </div>
                  <div className="ticket-card__type-row">
                    <span>Люкс</span>
                    <span className="ticket-card__seats">15</span>
                    <span className="ticket-card__price">3 530 ₽</span>
                  </div>
                  <button className="ticket-card__button">Выбрать места</button>
                </div>
              </div>
              {/* 2 */}
              <div className="ticket-card">
                <div className="ticket-card__icon">
                  <span className="ticket-card__icon-train">🚆</span>
                  <div className="ticket-card__number">020У</div>
                </div>
                <div className="ticket-card__main">
                  <div className="ticket-card__row">
                    <span className="ticket-card__time">00:20</span>
                    <span className="ticket-card__arrow">→</span>
                    <span className="ticket-card__time">08:59</span>
                  </div>
                  <div className="ticket-card__stations">
                    <span>Москва</span>
                    <span>Казань</span>
                  </div>
                  <div className="ticket-card__stations-sub">
                    <span>Казанский вокзал</span>
                    <span>Московский вокзал</span>
                  </div>
                </div>
                <div className="ticket-card__types">
                  <div className="ticket-card__type-row">
                    <span>Купе</span>
                    <span className="ticket-card__seats">19</span>
                    <span className="ticket-card__price">3 950 ₽</span>
                  </div>
                  <div className="ticket-card__type-row">
                    <span>Люкс</span>
                    <span className="ticket-card__seats">11</span>
                    <span className="ticket-card__price">4 950 ₽</span>
                  </div>
                  <button className="ticket-card__button">Выбрать места</button>
                </div>
              </div>
              {/* 3 */}
              <div className="ticket-card">
                <div className="ticket-card__icon">
                  <span className="ticket-card__icon-train">🚆</span>
                  <div className="ticket-card__number">116С</div>
                </div>
                <div className="ticket-card__main">
                  <div className="ticket-card__row">
                    <span className="ticket-card__time">00:41</span>
                    <span className="ticket-card__arrow">→</span>
                    <span className="ticket-card__time">09:13</span>
                  </div>
                  <div className="ticket-card__stations">
                    <span>Москва</span>
                    <span>Санкт-Петербург</span>
                  </div>
                  <div className="ticket-card__stations-sub">
                    <span>Курский вокзал</span>
                    <span>Ладожский вокзал</span>
                  </div>
                </div>
                <div className="ticket-card__types">
                  <div className="ticket-card__type-row">
                    <span>Плацкарт</span>
                    <span className="ticket-card__seats">32</span>
                    <span className="ticket-card__price">2 530 ₽</span>
                  </div>
                  <div className="ticket-card__type-row">
                    <span>Купе</span>
                    <span className="ticket-card__seats">24</span>
                    <span className="ticket-card__price">3 820 ₽</span>
                  </div>
                  <div className="ticket-card__type-row">
                    <span>Люкс</span>
                    <span className="ticket-card__seats">15</span>
                    <span className="ticket-card__price">4 950 ₽</span>
                  </div>
                  <button className="ticket-card__button">Выбрать места</button>
                </div>
              </div>
              {/* 4 */}
              <div className="ticket-card">
                <div className="ticket-card__icon">
                  <span className="ticket-card__icon-train">🚆</span>
                  <div className="ticket-card__number">020У</div>
                </div>
                <div className="ticket-card__main">
                  <div className="ticket-card__row">
                    <span className="ticket-card__time">00:32</span>
                    <span className="ticket-card__arrow">→</span>
                    <span className="ticket-card__time">09:13</span>
                  </div>
                  <div className="ticket-card__stations">
                    <span>Москва</span>
                    <span>Санкт-Петербург</span>
                  </div>
                  <div className="ticket-card__stations-sub">
                    <span>Казанский вокзал</span>
                    <span>Ладожский вокзал</span>
                  </div>
                </div>
                <div className="ticket-card__types">
                  <div className="ticket-card__type-row">
                    <span>Плацкарт</span>
                    <span className="ticket-card__seats">32</span>
                    <span className="ticket-card__price">2 530 ₽</span>
                  </div>
                  <div className="ticket-card__type-row">
                    <span>Купе</span>
                    <span className="ticket-card__seats">24</span>
                    <span className="ticket-card__price">3 820 ₽</span>
                  </div>
                  <div className="ticket-card__type-row">
                    <span>Люкс</span>
                    <span className="ticket-card__seats">15</span>
                    <span className="ticket-card__price">4 950 ₽</span>
                  </div>
                  <button className="ticket-card__button">Выбрать места</button>
                </div>
              </div>
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