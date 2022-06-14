import './sort-section.css';
import React, {FormEvent} from 'react';
import {HIDDEN_TAB_INDEX, SortKey} from '../../common/const';
import {useDispatch, useSelector} from 'react-redux';
import {setSortKey} from '../../store/action';
import {getCheckCarriers} from '../../store/app-search/selectors';
import CheckCarrier from '../check-carrier/check-carrier';

function SortSection ():JSX.Element {
  const dispatch = useDispatch();
  const checkCarriers = useSelector(getCheckCarriers);

  const handleOnClickRadio = (evt: FormEvent<HTMLInputElement>) => {
    const sortKey = Number(evt.currentTarget.value);
    dispatch(setSortKey(sortKey));
  };

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
                <input onChange={handleOnClickRadio} className="fieldset__check" type="radio" name="sort" value={SortKey.LowUp}/>
              </label>
            </li>
            <li className="sort__item">
              <label className="fieldset__label">
                - по убыванию цены
                <input onChange={handleOnClickRadio} className="fieldset__check" type="radio" name="sort" value={SortKey.HighUp}/>
              </label>
            </li>
            <li className="sort__item">
              <label className="fieldset__label">
                - по времени в пути
                <input onChange={handleOnClickRadio} className="fieldset__check" type="radio" name="sort" value={SortKey.Duration}/>
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
            {checkCarriers.map((checkCarrier) => (
              <CheckCarrier key={`CheckCarrier-${checkCarrier.label}`} checkCarrier={checkCarrier} />
            ))}
          </ul>
        </fieldset>
      </form>
    </section>
  );
}

export default SortSection;
