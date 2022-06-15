import {CatalogPriceType} from './catalog-price-type';

export type PriceResultType = {
  catalogPrice: CatalogPriceType,
  currentPrice: CatalogPriceType,
  userPrice: CatalogPriceType,
}
