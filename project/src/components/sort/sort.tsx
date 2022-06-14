import {SortKey} from '../../common/const';
import {FormEvent} from 'react';
import {setSortKey} from '../../store/action';
import {useDispatch} from 'react-redux';

function Sort ():JSX.Element {
  const dispatch = useDispatch();
  const handleOnClickRadio = (evt: FormEvent<HTMLInputElement>) => {
    const sortKey = Number(evt.currentTarget.value);
    dispatch(setSortKey(sortKey));
  };

  return (
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
  );
}

export default Sort;
