import {FormEvent} from 'react';
import {FlightChangeCheckboxType} from '../../types/checkbox-type';
import {useDispatch, useSelector} from 'react-redux';
import {setCheckFlightChanges} from '../../store/action';
import {getCheckFlightChanges} from '../../store/app-search/selectors';


type CheckFlightChangePropsType = {
  checkFlightChange: FlightChangeCheckboxType,
}

function CheckFlightChange ({checkFlightChange}: CheckFlightChangePropsType):JSX.Element {
  const {value, label} = checkFlightChange;
  const checkFlightChanges = useSelector(getCheckFlightChanges);
  const dispatch = useDispatch();

  const handleOnClick = (evt: FormEvent<HTMLInputElement>) => {
    const {checked} = evt.currentTarget;
    const newCheckFlightChanges = checkFlightChanges.map((check)=>(
      check.value === value ? {...check, isCheck: checked} : check
    ));
    dispatch(setCheckFlightChanges(newCheckFlightChanges));
  };

  return (
    <li className="fieldset__item">
      <label className="fieldset__label">
        {`- ${label}`}
        <input onClick={handleOnClick} className="fieldset__check" type="checkbox" value={value}/>
      </label>
    </li>
  );
}

export default CheckFlightChange;
