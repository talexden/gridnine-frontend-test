import CheckFlightChange from '../check-flight-change/check-flight-change';
import {useSelector} from 'react-redux';
import {getCheckFlightChanges} from '../../store/app-search/selectors';

function FilterFlightChanges () {
  const checkFlightChanges = useSelector(getCheckFlightChanges);

  return(
    <fieldset className="fieldset form__fieldset">
      <legend className="legend fieldset__legend">Фильтровать</legend>
      <ul className="fieldset__list">
        {checkFlightChanges.map((checkFlightChange) => (
          <CheckFlightChange key={`CheckCarrier-${checkFlightChange.label}`} checkFlightChange={checkFlightChange} />
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterFlightChanges;
