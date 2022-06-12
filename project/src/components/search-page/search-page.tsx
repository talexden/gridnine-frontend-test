import './search-page.css';
import React from 'react';
import Catalog from '../catalog/catalog';
import SortSection from '../sort-section/sort-section';
import {HIDDEN_TAB_INDEX} from '../../common/const';
import './search-page.css';

function SearchPage ():JSX.Element {
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

export default SearchPage;
