import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function OrderPage() {
  const navigate = useNavigate();

  // Пример выбранного билета 
  const ticket = {
    from: 'Москва',
    to: 'Санкт-Петербург',
    date: '01.08.2024',
    time: '10:00 — 18:00',
    type: 'Купе',
    basePrice: 3500,
  };

  // Состояния для доп. услуг
  const [services, setServices] = useState({
    linen: false,
    ac: false,
    wifi: false,
  });

  // Состояния для формы
  const [fio, setFio] = useState('');
  const [passport, setPassport] = useState('');

  // Цены за услуги
  const servicePrices = {
    linen: 200,
    ac: 150,
    wifi: 100,
  };

  // Итоговая цена
  const total =
    ticket.basePrice +
    (services.linen ? servicePrices.linen : 0) +
    (services.ac ? servicePrices.ac : 0) +
    (services.wifi ? servicePrices.wifi : 0);

  // Обработка чекбоксов
  const handleServiceChange = (e) => {
    setServices({ ...services, [e.target.name]: e.target.checked });
  };

  // Обработка отправки формы с перенаправлением
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь может быть логика покупки
    navigate('/success'); // Перенаправление на страницу успеха
  };

  return (
    <>
      <Header />
      <main className="main order-main">
        <section className="order-section">
          <h2 className="order-section__title">Оформление заказа</h2>

          {/* Блок выбранного билета */}
          <div className="order-ticket">
            <div>
              <b>{ticket.from}</b> → <b>{ticket.to}</b>
            </div>
            <div>{ticket.date}, {ticket.time}</div>
            <div>Тип: {ticket.type}</div>
            <div>Базовая цена: {ticket.basePrice} ₽</div>
          </div>

          <form className="order-form" onSubmit={handleSubmit}>
            <div className="order-form__group">
              <label className="order-form__label">ФИО пассажира</label>
              <input
                type="text"
                className="order-form__input"
                placeholder="Введите ФИО"
                value={fio}
                onChange={e => setFio(e.target.value)}
                required
              />
            </div>
            <div className="order-form__group">
              <label className="order-form__label">Паспорт</label>
              <input
                type="text"
                className="order-form__input"
                placeholder="Серия и номер"
                value={passport}
                onChange={e => setPassport(e.target.value)}
                required
              />
            </div>
            <div className="order-form__group">
              <label className="order-form__label">Дополнительные услуги</label>
              <div className="order-form__checkboxes">
                <label>
                  <input
                    type="checkbox"
                    name="linen"
                    checked={services.linen}
                    onChange={handleServiceChange}
                  /> Бельё (+{servicePrices.linen} ₽)
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="ac"
                    checked={services.ac}
                    onChange={handleServiceChange}
                  /> Кондиционер (+{servicePrices.ac} ₽)
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="wifi"
                    checked={services.wifi}
                    onChange={handleServiceChange}
                  /> Wi-Fi (+{servicePrices.wifi} ₽)
                </label>
              </div>
            </div>
            <div className="order-form__total">
              Итоговая цена: <b>{total} ₽</b>
            </div>
            <button className="button order-form__button" type="submit">
              Купить билет
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default OrderPage;