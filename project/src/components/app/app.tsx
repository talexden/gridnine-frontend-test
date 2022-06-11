import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import ErrorScreen from '../error-screen/error-screen';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../common/const';
import MainPage from '../main-page/main-page';

function App(): JSX.Element {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={`AppRoute.Main`}>
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
