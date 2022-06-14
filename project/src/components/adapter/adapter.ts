import {FlightSegment, FlightType, LegType} from '../../types/flight-type';

const getSegments = (segments: any[]): FlightSegment[] => segments.map((segment)=>Object.assign(
  {},
  {
    departureDate: segment.departureDate,
    departureAirport : segment.departureAirport,
    departureCity : segment.departureCity || {uid : '', caption : ''}, // Битый тестовый json
    travelDuration : segment.travelDuration,
    arrivalDate : segment.arrivalDate,
    arrivalCity : segment.arrivalCity || {uid : '', caption : ''}, // Битый тестовый json
    arrivalAirport : segment.arrivalAirport,
    flightNumber : segment.flightNumber,
    stops : segment.stops,
    airline : segment.airline,
    aircraft : segment.aircraft,
  },
));


const getLegs = (legs: any[]): LegType[] => legs.map((leg)=> {
  const legSegments = getSegments(leg.segments);
  const legDuration = leg.duration;
  return Object.assign(
    {},
    {
      flightChange: legSegments.length - 1,
      duration: legDuration,
      segments: legSegments,
    },
  );
});


export class Adapter {
  static adaptToClient({flight, flightToken}: any): FlightType {
    return Object.assign(
      {},
      {
        carrier: flight.carrier,
        priceTotal: flight.price.total,
        legs: getLegs(flight.legs),
        flightToken: flightToken,
      });
  }
}
