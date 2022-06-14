import {FlightType} from '../types/flight-type';
import {SortKey} from './const';

export const formatDateMMWW = (date: string): string => {
  const dayMonth = new Date(date).toLocaleString('ru', {
    day: 'numeric',
    month: 'short',
  });

  const weekday = new Date(date).toLocaleString('ru', {
    weekday: 'short',
  });

  return `${dayMonth} ${weekday}`;
};

export const formatTime = (date: string): string => (
  new Date(date).toLocaleString('ru', {
    hour: 'numeric',
    minute: 'numeric',
  }));

export const getFlightChangeName = (flightChange: number) => {
  let result = 'без пересадок';
  if (flightChange !== 0) {
    result = `${flightChange} пересадка`;
    if (flightChange > 1 && flightChange < 5 ) {
      result = `${flightChange} пересадки`;
    }
  }

  return result;
};


export const sortFlights = (flights: FlightType[], sortKey: SortKey): FlightType[] => (
  sortKey === SortKey.Duration
    ? [...flights].sort((a, b ) => (
      (a.legs[0].duration + a.legs[1].duration) > (b.legs[0].duration + b.legs[1].duration) ? 1 : -1))
    : [...flights].sort((a, b ) => (
      (Number(a.priceTotal.amount) > Number(b.priceTotal.amount) ? sortKey : -1 * sortKey)))
);
