import './catalog.css';
import {MouseEvent} from 'react';
import Card from '../card/card';
import {useDispatch, useSelector} from 'react-redux';
import {setCount} from '../../store/action';
import {getIsShowMoreButton, getShowFlights} from '../../store/app-search/selectors';


function Catalog (): JSX.Element {
  const flights = useSelector(getShowFlights);
  const isShowMoreButton = useSelector(getIsShowMoreButton);
  const dispatch = useDispatch();

  const handleOnClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setCount());
  };

  return (
    <section className="catalog main__catalog">
      <h2 className="visually-hidden">Каталог</h2>
      <ul className="catalog__list">
        {flights.map((flight,index) => (
          <li key={`card-${String(index)}-${flight.flightToken}`} className="catalog__item" >
            <Card flight={flight}/>
          </li>
        ))}
      </ul>
      <a
        onClick={handleOnClick}
        className={`catalog__button button${isShowMoreButton ? '' : ' visually-hidden'}`}
        href="#show-more"
      >
        Показать еще
      </a>
    </section>
  );
}

export default Catalog;
