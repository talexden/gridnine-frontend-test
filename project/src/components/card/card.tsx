import './card.css';
import React from 'react';
import Offer from '../offer/offer';

function Card(): JSX.Element {
  return (
    <article className="card catalog__card">
      <header className="card-header card__header">
        <img className="logo card-header__logo" src="http://pics.avs.io/99/36/SU.png" width="99" height="36" alt="Логотип авиакомпании"/>
        <div  className="card-header__text-wrapper">
          <p className="card-header__price">21049 ₽</p>
          <p className="card-header__price-description">Стоимость для одного взрослого пассажира</p>
        </div>
      </header>
      <Offer />
      <Offer />
      <a className="button card__button" href="#select">Выбрать</a>
    </article>
  );
}

export default Card;
