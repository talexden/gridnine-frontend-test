import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../common/const';
import {ActionType} from '../types/action-type';
import {FlightType} from '../types/flight-type';


export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute | string) => (
    {payload: url}
  ));

export const setFlights = createAction(
  ActionType.SetFlights,
  (flights: FlightType[]) => (
    {payload: flights}
  ));

export const setIsLoading = createAction(ActionType.SetIsLoading);
export const setIsLoaded = createAction(ActionType.SetIsLoaded);

