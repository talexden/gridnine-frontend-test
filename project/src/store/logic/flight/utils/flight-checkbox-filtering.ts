import {FlightType} from '../../../../types/flight-type';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../../../../types/checkbox-type';

export const flightCheckboxFiltering = (
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
