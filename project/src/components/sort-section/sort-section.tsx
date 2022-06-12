import './sort-section.css';
import React from 'react';
import {HIDDEN_TAB_INDEX} from '../../common/const';

function SortSection ():JSX.Element {
  return (
    <section className="sort-section main__sort-section">
      <h2 className="visually-hidden" tabIndex={HIDDEN_TAB_INDEX}>Сортировка</h2>
      <form className="form sort-section__form">
        <fieldset className="fieldset form__fieldset">
          <legend className="legend fieldset__legend">Сортировать</legend>
          <ul className="fieldset__list">
            <li className="fieldset__item">
              <label className="fieldset__label">
                - по возрастанию цены
                <input className="fieldset__check" type="radio" name="sort" value="PriceLowFirst"/>
              </label>
            </li>
            <li className="sort__item">
              <label className="fieldset__label">
                - по убыванию цены
                <input className="fieldset__check" type="radio" name="sort" value="PriceHighFirst"/>
              </label>
            </li>
            <li className="sort__item">
              <label className="fieldset__label">
                - по времени в пути
                <input className="fieldset__check" type="radio" name="sort" value="TravelDuration"/>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className="fieldset form__fieldset">
          <legend className="legend fieldset__legend">Фильтровать</legend>
          <ul className="fieldset__list">
            <li className="fieldset__item">
              <label className="fieldset__label">
                - 1 пересадка
                <input className="fieldset__check" type="checkbox" />
              </label>
            </li>
            <li className="sort__item">
              <label className="fieldset__label">
                - без пересадок
                <input className="fieldset__check" type="checkbox" />
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className="fieldset form__fieldset form__fieldset--price">
          <legend className="legend fieldset__legend">Цена</legend>
          <ul className="fieldset__list">
            <li className="fieldset__item">
              <label className="fieldset__label fieldset__label--price">
                От
                <input className="fieldset__text" type="text" placeholder="0"/>
              </label>
            </li>
            <li className="sort__item">
              <label className="fieldset__label fieldset__label--price">
                До
                <input className="fieldset__text" type="text" placeholder="10000"/>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className="fieldset form__fieldset">
          <legend className="legend fieldset__legend">Авиакомпании</legend>
          <ul className="fieldset__list">
            <li className="fieldset__item">
              <label className="fieldset__label fieldset__label--airlines">
                <span className="fieldset__label-span">- LOT Polish Airlines</span>
                <span className="fieldset__label-span"> от 21390 р.</span>
                <input className="fieldset__check" type="checkbox" />
              </label>
            </li>
            <li className="sort__item">
              <label className="label fieldset__label fieldset__label--airlines">
                <span className="fieldset__label-span">- Аэрофлот - российские авиалинии</span>
                <span className="fieldset__label-span"> от 31733 р.</span>
                <input className="fieldset__check" type="checkbox" />
              </label>
            </li>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}

export default SortSection;
