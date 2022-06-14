import './card.css';
import React from 'react';
import Offer from '../offer/offer';
import {FlightType} from '../../types/flight-type';

type CardPropsType = {
  flight: FlightType,
}

function Card({flight}: CardPropsType): JSX.Element {
  const {carrier, priceTotal, legs, flightToken} = flight;
  return (
    <article className="card catalog__card">
      <header className="card-header card__header">
        <img className="logo card-header__logo" src={`http://pics.avs.io/99/36/${carrier.airlineCode}.png`} width="99" height="36" alt="Логотип авиакомпании"/>
        <div  className="card-header__text-wrapper">
          <p className="card-header__price">{`${priceTotal.amount} ₽`}</p>
          <p className="card-header__price-description">Стоимость для одного взрослого пассажира</p>
        </div>
      </header>
      {legs.map((leg,index)=> (
        <Offer leg={leg} carrier={carrier} key={`offer-${String(index)}-${flightToken}`}/>
      ))}
      <a className="button card__button" href="#select">Выбрать</a>
    </article>
  );
}

export default Card;
