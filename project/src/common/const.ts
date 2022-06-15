import {CatalogPriceType} from '../types/catalog-price-type';

export const COUNT_INIT = 2;
export const COUNT_STEP = 2;


export enum AppRoute {
  Main = '/',
  Search = '/search',
}

export enum APIRoute {
  Result = '/result',
}

export enum SortKey {
  LowUp = 1,
  HighUp = -1,
  Duration = 2,
}
export enum CheckboxSet {
  Carrier = 'carrier',
  LegsStop = 'legsStop',
}

export enum ErrorTexts {
  LoadGuitarsFailMessage = 'Сервер не доступен. Попробуйте попозже',
}

export const PRICE_INIT: CatalogPriceType = {
  priceMin: '',
  priceMax: '',
};

export const HIDDEN_TAB_INDEX = -1;
