import {FlightType} from '../../../../types/flight-type';
import {CarrierCheckboxType} from '../../../../types/checkbox-type';
import {CatalogPriceType} from '../../../../types/catalog-price-type';
import {getFlightChangeName} from '../../../../common/utils';
import {FlightInitType} from '../../../../types/flight-init-type';

export const flightCheckboxInit = (flights: FlightType[]): FlightInitType => {
  const carriersMap = new Map<string, CarrierCheckboxType>();
  const priceInit: CatalogPriceType = {
    priceMin: flights[0].priceTotal.amount,
    priceMax: flights[0].priceTotal.amount,
  };
  flights.forEach((flight) => {
    const key = flight.carrier.airlineCode;
    const mapValue = carriersMap.get(key);
    let price = flight.priceTotal.amount;
    priceInit.priceMin = Number(priceInit.priceMin) > Number(price) ? price : priceInit.priceMin;
    priceInit.priceMax = Number(priceInit.priceMax) < Number(price) ? price : priceInit.priceMax;
    if (mapValue) {
      price = Number(mapValue.bestPrice) < Number(price) ? mapValue.bestPrice : price;
    }
    carriersMap.set(
      key,
      {
        value: flight.carrier.airlineCode,
        label: flight.carrier.caption,
        isCheck: false,
        bestPrice: price,
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
