import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {StateType} from './state-type';
import {Action} from 'redux';

export enum ActionType {
  SetCheckCarriers = '/setCheckCarriers',
  SetCheckFlightChanges = '/setCheckFlightChanges',
  SetCount = '/setCount',
  SetFlights = '/setFlights',
  SetIsLoaded = '/setIsLoaded',
  SetIsLoading = '/setIsLoading',
  RedirectToRoute = '/redirectToRoute',
  SetOrigFlights = '/setOrigFlights',
  SetSortKey = '/setSortKey',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, Action>;

