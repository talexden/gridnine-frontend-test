import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import ErrorScreen from '../error-screen/error-screen';
import browserHistory from '../../browser-history';
import MainPage from '../main-page/main-page';
import {AppRoute} from '../../common/const';

function App(): JSX.Element {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute}>
          <MainPage />
        </Route>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
