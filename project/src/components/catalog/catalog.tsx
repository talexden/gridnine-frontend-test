import './catalog.css';
import React from 'react';
import Card from '../card/card';

function Catalog (): JSX.Element {
  return (
    <section className="catalog main__catalog">
      <h2 className="visually-hidden">Каталог</h2>
      <ul className="catalog__list">
        <li className="catalog__item">
          <Card />
        </li>
        <li className="catalog__item">
          <Card />
        </li>
      </ul>
      <a className="catalog__button button" href="#show-more">Показать еще</a>
    </section>
  );
}

export default Catalog;
