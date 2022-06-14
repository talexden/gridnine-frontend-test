import {FlightSegment, FlightType, LegType} from '../../types/flight-type';

const getSegments = (segments: any[]): FlightSegment[] => segments.map((segment)=>Object.assign(
  {},
  {
    departureDate: segment.departureDate,
    departureAirport : segment.departureAirport,
    departureCity : segment.departureCity,
    travelDuration : segment.travelDuration,
    arrivalDate : segment.arrivalDate,
    arrivalCity : segment.arrivalCity,
    arrivalAirport : segment.arrivalAirport,
    flightNumber : segment.flightNumber,
    stops : segment.stops,
    airline : segment.airline,
    aircraft : segment.aircraft,
  },
));


const getLegs = (legs: any[]): LegType[] => legs.map((leg)=> Object.assign(
  {},
  {
    duration: leg.duration,
    segments: getSegments(leg.segments),
  },
));


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
