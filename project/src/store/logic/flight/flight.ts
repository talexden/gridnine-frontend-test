import {FlightType} from '../../../types/flight-type';
import {SortKey} from '../../../common/const';
import {sortFlights} from '../../../common/utils';

const getShowArray = (flights: FlightType[], endIdx: number, startIdx = 0): FlightType[] => {
  const result: FlightType[] = [];
  for (let i = startIdx; i < endIdx; i++) {
    result.push(flights[i]);
  }
  return result;
};


class Flight {
  show = (flight: FlightType[], ShowCount: number): FlightType[] => getShowArray(flight, ShowCount);

  sort = (flights: FlightType[], sortKey: SortKey): FlightType[] => sortFlights(flights, sortKey);

  filter = (flights: FlightType[], filterKey: string): FlightType[] => (
    filterKey ? flights.filter((flight) => flight.carrier.airlineCode === filterKey) : []
  );
}


export default new Flight();
