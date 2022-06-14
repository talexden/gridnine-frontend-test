import {FlightType} from '../../../types/flight-type';
import {SortKey} from '../../../common/const';
import {getFlightChangeName, sortFlights} from '../../../common/utils';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../../../types/checkbox-type';
import {FilterPriceType} from '../../../types/filter-price-type';

type FlightInitType = {
  flightChangesSet: FlightChangeCheckboxType[],
  carriersSet: CarrierCheckboxType[],
  priceInit: FilterPriceType,
}


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

  init = (flights: FlightType[]): FlightInitType => {
    const carriersMap = new Map<string, CarrierCheckboxType>();
    const priceInit: FilterPriceType = {
      priceMin: Number(flights[0].priceTotal.amount),
      priceMax: Number(flights[0].priceTotal.amount),
    };
    flights.forEach((flight) => {
      const key = flight.carrier.airlineCode;
      const mapValue = carriersMap.get(key);
      const price = Number(flight.priceTotal.amount);
      let carrierPrice = flight.priceTotal.amount;
      priceInit.priceMin = priceInit.priceMin > price ? price : priceInit.priceMin;
      priceInit.priceMax = priceInit.priceMax < price ? price : priceInit.priceMax;
      if (mapValue) {
        carrierPrice = Number(mapValue.bestPrice) < Number(carrierPrice) ? mapValue.bestPrice : carrierPrice;
      }
      carriersMap.set(
        key,
        {
          value: flight.carrier.airlineCode,
          label: flight.carrier.caption,
          isCheck: false,
          bestPrice: carrierPrice,
        },
      );
    });
    const carriersSet: CarrierCheckboxType[] = Array.from(carriersMap.values());
    const flightChanges: number[] = [...new Set((flights.flatMap((flight) => flight.legs.map((leg) => leg.flightChange))))];
    const flightChangesSet = flightChanges.map((change)=> (
      {
        value: String(change),
        isCheck: false,
        label: getFlightChangeName(change),
      }),
    );
    return {flightChangesSet, carriersSet, priceInit};
  };

}


export default new Flight();
