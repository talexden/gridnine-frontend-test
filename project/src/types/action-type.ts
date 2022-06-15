import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {StateType} from './state-type';
import {Action} from 'redux';

export enum ActionType {
  RenderFlights = '/renderFlights',
  RedirectToRoute = '/redirectToRoute',
  SetUserPrice = '/setUserPrice',
  SetCheckCarriers = '/setCheckCarriers',
  SetCheckFlightChanges = '/setCheckFlightChanges',
  SetCount = '/setCount',
  SetIsLoaded = '/setIsLoaded',
  SetIsLoading = '/setIsLoading',
  SetOrigFlights = '/setOrigFlights',
  SetSortKey = '/setSortKey',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, Action>;

