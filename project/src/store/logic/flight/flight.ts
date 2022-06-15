import {FlightType} from '../../../types/flight-type';
import {SortKey} from '../../../common/const';
import {sortFlights} from '../../../common/utils';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../../../types/checkbox-type';
import {CatalogPriceType} from '../../../types/catalog-price-type';
import {PriceResultType} from '../../../types/price-result-type';
import {flightGetPrice} from './utils/flight-get-price';
import {FlightInitType} from '../../../types/flight-init-type';
import {flightCheckboxInit} from './utils/flight-checkbox-init';
import {flightCheckboxFiltering} from './utils/flight-checkbox-filtering';


class Flight {

  static show = (flights: FlightType[], endIdx: number, startIdx = 0): FlightType[] => flights.slice(startIdx, endIdx);

  static getPrice = (flights: FlightType[], price: CatalogPriceType): PriceResultType => flightGetPrice(flights, price);

  static sort = (flights: FlightType[], sortKey: SortKey): FlightType[] => sortFlights(flights, sortKey);

  static priceFiltering = (flights: FlightType[], {...price}: CatalogPriceType): FlightType[] => {
    if (Number(price.priceMax) < Number(price.priceMin)) {
      [price.priceMax, price.priceMin] = [price.priceMin, price.priceMax];
    }
    return flights.filter((flight) => (
      Number(flight.priceTotal.amount) >= Number(price.priceMin)
      && Number(flight.priceTotal.amount) <= Number(price.priceMax)));
  };

  static checkboxInit = (flights: FlightType[]): FlightInitType => flightCheckboxInit(flights);

  static checkboxFiltering = (
    flights: FlightType[],
    checkCarriers: CarrierCheckboxType[],
    checkFlightChanges: FlightChangeCheckboxType[],
  ): FlightType[] => flightCheckboxFiltering(flights, checkCarriers, checkFlightChanges);


}


export default Flight;
