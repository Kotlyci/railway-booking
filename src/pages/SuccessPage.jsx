import React from 'react';
import Header from '../components/Header';

function SuccessPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="success">
          <h2 className="success__title">Покупка успешно завершена!</h2>
          <p className="success__text">
            Ваш билет был успешно оформлен.<br />
            Спасибо за покупку и приятной поездки!
          </p>
          <a href="/" className="button">На главную</a>
        </section>
      </main>
    </>
  );
}

export default SuccessPage;