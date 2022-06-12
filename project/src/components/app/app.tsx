import {Switch, Route, Router as BrowserRouter, Redirect} from 'react-router-dom';
import ErrorScreen from '../error-screen/error-screen';
import browserHistory from '../../browser-history';
import SearchPage from '../search-page/search-page';
import {AppRoute} from '../../common/const';

function App(): JSX.Element {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Search}>
          <SearchPage />
        </Route>
        <Route exact path={AppRoute.Main}>
          <Redirect to={AppRoute.Search} />
        </Route>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
