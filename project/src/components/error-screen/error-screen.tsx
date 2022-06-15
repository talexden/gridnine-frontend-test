import {AppRoute, HIDDEN_TAB_INDEX} from '../../common/const';
import {Link} from 'react-router-dom';

function ErrorScreen(): JSX.Element {
  return (
    <div className="page">
      <div className="page-wrapper container">
        <main className="main .page__main">
          <h1 className="visually-hidden" aria-hidden tabIndex={HIDDEN_TAB_INDEX}>Авиабилеты</h1>
          <b className="container">404 Not Found. <Link to={AppRoute.Main}>Return to Main Page</Link></b>
        </main>

      </div>
    </div>
  );
}

export default ErrorScreen;
