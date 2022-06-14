import {createAction} from '@reduxjs/toolkit';
import {AppRoute, SortKey} from '../common/const';
import {ActionType} from '../types/action-type';
import {FlightType} from '../types/flight-type';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../types/checkbox-type';


export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute | string) => (
    {payload: url}
  ));

export const renderFlights = createAction(ActionType.RenderFlights);

export const setCheckCarriers = createAction(
  ActionType.SetCheckCarriers,
  (checkCarriers: CarrierCheckboxType[]) => (
    {payload: checkCarriers}
  ));

export const setCheckFlightChanges = createAction(
  ActionType.SetCheckFlightChanges,
  (checkFlightChanges: FlightChangeCheckboxType[]) => (
    {payload: checkFlightChanges}
  ));

export const setCount = createAction(ActionType.SetCount);

export const setFlights = createAction(
  ActionType.SetFlights,
  (flights: FlightType[]) => (
    {payload: flights}
  ));

export const setIsLoading = createAction(ActionType.SetIsLoading);
export const setIsLoaded = createAction(ActionType.SetIsLoaded);

export const setOrigFlights = createAction(
  ActionType.SetOrigFlights,
  (flights: FlightType[]) => (
    {payload: flights}
  ));

export const setSortKey = createAction(
  ActionType.SetSortKey,
  (sortKey: SortKey) => (
    {payload: sortKey}
  ));
