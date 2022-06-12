export type FlightSegment = {
  departureDate : string,
  departureAirport :
    {
      uid : string,
      caption : string
    },
  departureCity :
    {
      uid : string,
      caption : string
    },
  travelDuration : number,
  arrivalDate : string,
  arrivalCity :
    {
      uid : string,
      caption : string
    },
  arrivalAirport :
    {
      uid : string,
      caption : string
    }
  flightNumber : string,
  stops : number,
  airline :
    {
      uid : string,
      caption : string,
      airlineCode : string
    },
  aircraft :
    {
      uid : string,
      caption : string
    },
}

export type LegsType = {
  duration : number,
  segments : FlightSegment[],
}

export type FlightType = {
  carrier :
    {
      uid : string,
      caption : string,
      airlineCode : string
    },
  priceTotal :
    {
      amount : string,
      currency : string,
      currencyCode : string
    },
  legs : LegsType[],
}
