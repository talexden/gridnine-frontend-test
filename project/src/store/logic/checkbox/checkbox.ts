import {FlightType} from '../../../types/flight-type';
import {getFlightChangeName} from '../../../common/utils';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../../../types/checkbox-type';

type GetCheckboxSetsType = {
  flightChangesSet: FlightChangeCheckboxType[],
  carriersSet: CarrierCheckboxType[],
}

class Checkbox {
  static getCheckboxSets = (flights: FlightType[]): GetCheckboxSetsType => {
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
    const flightChanges: number[] = [...new Set((flights.flatMap((flight) => flight.legs.map((leg) => leg.flightChange))))];
    const flightChangesSet = flightChanges.map((change)=> (
      {
        value: String(change),
        isCheck: false,
        label: getFlightChangeName(change),
      }),
    );
    return {flightChangesSet, carriersSet};
  };

  static filterByCheckbox = (
    flights: FlightType[],
    checkCarriers: CarrierCheckboxType[],
    checkFlightChanges: FlightChangeCheckboxType[],
  ): FlightType[] => {
    let flightsByCheck = [...flights];
    if (checkCarriers.find((check) => check.isCheck)) {
      flightsByCheck = [];
      checkCarriers.forEach((check)=>{
        if (check.isCheck) {
          const flightsCarrier =  flights.filter((flight) => check.value === flight.carrier.airlineCode);
          flightsByCheck = [...flightsCarrier, ...flightsByCheck];
        }
      });
    }

    if (checkFlightChanges.find((check) => check.isCheck)) {
      const flightsByCarrier = [...flightsByCheck];
      flightsByCheck = [];
      checkFlightChanges.forEach((check) => {
        if (check.isCheck) {
          const filteredFlight = flightsByCarrier.filter((flight) => (
            Number(check.value) === flight.legs[1].flightChange && Number(check.value) === flight.legs[0].flightChange
          ));
          flightsByCheck = [...new Set([...filteredFlight, ...flightsByCheck])];
        }
      });
    }

    return flightsByCheck;
  };
}

export default Checkbox;
