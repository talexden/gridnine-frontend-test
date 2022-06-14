import {FlightType} from '../../../types/flight-type';
import {getFlightChangeName} from '../../../common/utils';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../../../types/checkbox-type';

class Checkbox {
  static getCheckboxSets = (flights: FlightType[]): [FlightChangeCheckboxType[], CarrierCheckboxType[]] => {
    const carriersMap = new Map<string, CarrierCheckboxType>();
    flights.forEach((flight) => {
      const key = flight.carrier.airlineCode;
      const mapValue = carriersMap.get(key);
      let carrierPrice = flight.priceTotal.amount;
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
    const flightChanges: number[] = [...new Set((flights.flatMap((flight) => flight.legs.map((leg) => (leg.segments.length -1)))))];
    const flightChangesSet = flightChanges.map((change)=> (
      {
        value: String(change),
        isCheck: false,
        label: getFlightChangeName(change),
      }),
    );
    return [flightChangesSet, carriersSet];
  };
}

export default Checkbox;
