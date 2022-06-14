import React, {FormEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCheckCarriers} from '../../store/action';
import {CarrierCheckboxType} from '../../types/checkbox-type';
import {getCheckCarriers} from '../../store/app-search/selectors';

type CheckCarrierPropsType = {
  checkCarrier: CarrierCheckboxType,
}

function CheckCarrier ({checkCarrier}: CheckCarrierPropsType):JSX.Element {
  const {value, label, bestPrice } = checkCarrier;
  const checkCarriers = useSelector(getCheckCarriers);
  const dispatch = useDispatch();

  const handleOnClickCheckAirlines = (evt: FormEvent<HTMLInputElement>) => {
    const {checked} = evt.currentTarget;
    const newCheckCarriers = checkCarriers.map((check)=>(
      check.value === value ? {...check, isCheck: checked} : check
    ));
    dispatch(setCheckCarriers(newCheckCarriers));
  };

  return (
    <li className="fieldset__item">
      <label className="fieldset__label fieldset__label--airlines">
        <span className="fieldset__label-span">{`- ${label}`}</span>
        <span className="fieldset__label-span">{`от ${bestPrice} р.`}</span>
        <input onClick={handleOnClickCheckAirlines} className="fieldset__check" type="checkbox" value={value}/>
      </label>
    </li>
  );
}

export default CheckCarrier;
