
function FilterPrice () {

  return(
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
  );
}

export default FilterPrice;
