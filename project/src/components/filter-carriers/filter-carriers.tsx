import CheckCarrier from '../check-carrier/check-carrier';
import {useSelector} from 'react-redux';
import {getCheckCarriers} from '../../store/app-search/selectors';

function FilterCarriers () {
  const checkCarriers = useSelector(getCheckCarriers);
  return(
    <fieldset className="fieldset form__fieldset">
      <legend className="legend fieldset__legend">Авиакомпании</legend>
      <ul className="fieldset__list">
        {checkCarriers.map((checkCarrier) => (
          <CheckCarrier key={`CheckCarrier-${checkCarrier.label}`} checkCarrier={checkCarrier} />
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterCarriers;
