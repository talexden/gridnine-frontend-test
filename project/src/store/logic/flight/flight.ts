import {FlightType} from '../../../types/flight-type';
import {SortKey} from '../../../common/const';
import {sortFlights} from '../../../common/utils';

class Flight {
  #isShowMoreButton = true;

  show = (flights: FlightType[], endIdx: number, startIdx = 0): FlightType[] => {
    const resFlights = flights.slice(startIdx, endIdx);

    this.#isShowMoreButton = flights.length !== resFlights.length;
    return resFlights;
  };

  getIsShowMoreButton = () => this.#isShowMoreButton;

  sort = (flights: FlightType[], sortKey: SortKey): FlightType[] => sortFlights(flights, sortKey);

  filter = (flights: FlightType[], filterKey: string): FlightType[] => (
    filterKey ? flights.filter((flight) => flight.carrier.airlineCode === filterKey) : []
  );
}


export default new Flight();
