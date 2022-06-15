import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {getCatalogPrice, getUserPrice} from '../../store/app-search/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {renderFlights, setUserPrice} from '../../store/action';

function FilterPrice () {
  const userPrice = useSelector(getUserPrice);
  const catalogPrice = useSelector(getCatalogPrice);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(userPrice);

  useEffect(()=> {
    setPrice(userPrice);
  }, [userPrice]);

  const handleChangePrice = ( evt: ChangeEvent<HTMLInputElement>) => {
    let {value} = evt.target;
    const {name} = evt.target;
    value = value.replace(/\D/g, ''); // '[^0-9]' === '\D'
    while (value[0] === '0') {
      value = value.replace(/^0/, '');
    }
    setPrice({...price, [name]: value});
  };

  const handlePressEnter = ( evt: KeyboardEvent<HTMLInputElement>) => {
    if ( evt.key === 'Enter') {
      dispatch(setUserPrice(price));
      dispatch(renderFlights());
    }
  };

  const handleOnBlur = () => {
    dispatch(setUserPrice(price));
  };

  return(
    <fieldset className="fieldset form__fieldset form__fieldset--price">
      <legend className="legend fieldset__legend">Цена</legend>
      <ul className="fieldset__list">
        <li className="fieldset__item">
          <label className="fieldset__label fieldset__label--price">
            От
            <input
              onKeyDown={handlePressEnter}
              onChange={handleChangePrice}
              onBlur={handleOnBlur}
              className="fieldset__text"
              type="text"
              name="priceMin"
              placeholder={catalogPrice.priceMin}
              value={price.priceMin}
            />
          </label>
        </li>
        <li className="sort__item">
          <label className="fieldset__label fieldset__label--price">
            До
            <input
              onKeyDown={handlePressEnter}
              onChange={handleChangePrice}
              onBlur={handleOnBlur}
              className="fieldset__text"
              type="text"
              name="priceMax"
              placeholder={catalogPrice.priceMax}
              value={price.priceMax}
            />
          </label>
        </li>
      </ul>
    </fieldset>
  );
}

export default FilterPrice;
