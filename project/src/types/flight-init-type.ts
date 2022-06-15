import {CarrierCheckboxType, FlightChangeCheckboxType} from './checkbox-type';
import {CatalogPriceType} from './catalog-price-type';

export type FlightInitType = {
  flightChangesSet: FlightChangeCheckboxType[],
  carriersSet: CarrierCheckboxType[],
  priceInit: CatalogPriceType,
}
