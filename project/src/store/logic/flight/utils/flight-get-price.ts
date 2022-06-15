import {FlightType} from '../../../../types/flight-type';
import {CatalogPriceType} from '../../../../types/catalog-price-type';
import {PRICE_INIT} from '../../../../common/const';
import {PriceResultType} from '../../../../types/price-result-type';


export const flightGetPrice = (flights: FlightType[], price: CatalogPriceType): PriceResultType => {
  const catalogPrice = {...PRICE_INIT};
  const currentPrice = {...PRICE_INIT};
  const userPrice = {...price};

  if (flights.length > 0) {
    // get catalogPrice (price by catalog)
    catalogPrice.priceMin = flights[0].priceTotal.amount;
    catalogPrice.priceMax = flights[0].priceTotal.amount;

    flights.forEach((flight)=> {
      const priceTotal = flight.priceTotal.amount;
      catalogPrice.priceMin = Number(catalogPrice.priceMin) > Number(priceTotal) ? priceTotal : catalogPrice.priceMin;
      catalogPrice.priceMax = Number(catalogPrice.priceMax) < Number(priceTotal) ? priceTotal : catalogPrice.priceMax;
    });


    // correct userPrice
    if (userPrice.priceMin) {
      // if(Number(userPrice.priceMin) < Number(catalogPrice.priceMin)){
      //   userPrice.priceMin = catalogPrice.priceMin;
      // }
      // if(Number(userPrice.priceMin) > Number(catalogPrice.priceMax)){
      //   userPrice.priceMin = catalogPrice.priceMax;
      // }
    } else {
      userPrice.priceMin = catalogPrice.priceMin;
    }

    if (userPrice.priceMax) {
      // if(Number(userPrice.priceMax) > Number(catalogPrice.priceMax)){
      //   userPrice.priceMax = catalogPrice.priceMax;
      // }
      // if(Number(userPrice.priceMax) < Number(catalogPrice.priceMin)){
      //   userPrice.priceMin = catalogPrice.priceMin;
      // }
    } else {
      userPrice.priceMax = catalogPrice.priceMax;
    }
    //
    // if (Number(userPrice.priceMax) < Number(userPrice.priceMin)) {
    //   [userPrice.priceMax, userPrice.priceMin] = [userPrice.priceMin, userPrice.priceMax];
    // }

    currentPrice.priceMax = userPrice.priceMax;
    currentPrice.priceMin = userPrice.priceMin;

    userPrice.priceMin = catalogPrice.priceMin === userPrice.priceMin ? '' : userPrice.priceMin;
    userPrice.priceMax = catalogPrice.priceMax === userPrice.priceMax ? '' : userPrice.priceMax;

  }

  return {catalogPrice, currentPrice, userPrice};
};
