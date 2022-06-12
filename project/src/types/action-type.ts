import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {StateType} from './state-type';
import {Action} from 'redux';

export enum ActionType {
  SetIsLoaded = '/setIsLoaded',
  SetIsLoading = '/setIsLoading',
  SetFlights = '/setFlights',
  RedirectToRoute = '/redirectToRoute',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, Action>;

