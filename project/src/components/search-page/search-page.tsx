import './search-page.css';
import Catalog from '../catalog/catalog';
import SortSection from '../sort-section/sort-section';
import {HIDDEN_TAB_INDEX} from '../../common/const';
import './search-page.css';
import {useSelector} from 'react-redux';
import {getIsLoading} from '../../store/app-search/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

function SearchPage ():JSX.Element {
  const isLoading = useSelector(getIsLoading);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  } else {
    return (
      <div className="page">
        <main className="main page__main">
          <h1 className="visually-hidden" tabIndex={HIDDEN_TAB_INDEX}>Поиск авиа-билетов</h1>
          <SortSection />
          <Catalog />
        </main>
      </div>
    );
  }
}

export default SearchPage;
