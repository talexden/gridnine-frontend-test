import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {redirect} from './redirect';
import {redirectToRoute} from '../action';
import {AppRoute} from '../../common/const';
import {RootState} from '../root-reducer';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<RootState, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /catalog', () => {
    const catalog = `${AppRoute.Search}`;
    store.dispatch(redirectToRoute(catalog));
    expect(fakeHistory.location.pathname).toBe(catalog);
    expect(store.getActions()).toEqual([
      redirectToRoute(catalog),
    ]);
  });

  it('should not to be redirect /lose because bad action', () => {
    store.dispatch({type: 'UNKNOWN_ACTION', payload: AppRoute.Search});
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.Search);
  });
});
