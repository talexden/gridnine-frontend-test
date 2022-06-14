import './sort-section.css';
import {HIDDEN_TAB_INDEX} from '../../common/const';
import Sort from '../sort/sort';
import FilterFlightChanges from '../filter-flight-changes/filter-flight-changes';
import FilterPrice from '../filter-price/filter-price';
import FilterCarriers from '../filter-carriers/filter-carriers';

function SortSection ():JSX.Element {

  return (
    <section className="sort-section main__sort-section">
      <h2 className="visually-hidden" tabIndex={HIDDEN_TAB_INDEX}>Сортировка</h2>
      <form className="form sort-section__form">
        <Sort />
        <FilterFlightChanges />
        <FilterPrice />
        <FilterCarriers />
      </form>
    </section>
  );
}

export default SortSection;
