import {HIDDEN_TAB_INDEX} from '../../common/const';
import React from 'react';
// import {AppRoute} from '../../const';

function ErrorScreen(): JSX.Element {
  return (
    <div className="page">
      <div className="page-wrapper container">
        <main className="page__main main">
          <h1 className="visually-hidden" aria-hidden tabIndex={HIDDEN_TAB_INDEX}>Авиабилеты</h1>
          <b className="favorites__status">404 Not Found.</b>
        </main>
      </div>
    </div>
  );
}

export default ErrorScreen;
