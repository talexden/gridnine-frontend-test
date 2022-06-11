import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../common/const';
import {ActionType} from '../types/action-type';


export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute | string) => (
    {payload: url}
  ));

export const setTickets = createAction(
  ActionType.SetTickets,
  (tickets: TicketType[]) => (
    {payload: tickets}
  ));

export const setIsLoading = createAction(ActionType.SetIsLoading);
export const setIsLoaded = createAction(ActionType.SetIsLoaded);

