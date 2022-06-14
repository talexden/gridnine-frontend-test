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

export type LegType = {
  flightChange: number,
  duration : number,
  segments : FlightSegment[],
}

export type CarrierType = {
  uid : string,
  caption : string,
  airlineCode : string
}

export type PriceType = {
  amount : string,
  currency : string,
  currencyCode : string
}


export type FlightType = {
  carrier: CarrierType,
  priceTotal: PriceType
  legs: LegType[],
  flightToken: string;
}

