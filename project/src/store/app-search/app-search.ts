import {createReducer} from '@reduxjs/toolkit';
import {
  setIsLoading, setIsLoaded, setCount, setOrigFlights, setSortKey, setCheckCarriers, setCheckFlightChanges,
  renderFlights, setUserPrice
} from '../action';
import {FlightType} from '../../types/flight-type';
import {PRICE_INIT, SortKey} from '../../common/const';
import {ShowCount} from '../logic/count/count';
import Flight from '../logic/flight/flight';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../../types/checkbox-type';
import {CatalogPriceType} from '../../types/catalog-price-type';

export type AppSearchType = {
  currentPrice: CatalogPriceType | null,
  checkCarriers: CarrierCheckboxType[],
  checkFlightChanges: FlightChangeCheckboxType[],
  catalogPrice: CatalogPriceType,
  isLoading: boolean,
  isShowMoreButton: boolean,
  flightsByCheck: FlightType[],
  flightsByPrice: FlightType[],
  origFlights: FlightType[],
  sortKey: SortKey | null,
  showCount: number,
  showFlights: FlightType[],
  sortedFlights: FlightType[],
  userPrice: CatalogPriceType,
}

const initialStore: AppSearchType = {
  catalogPrice: PRICE_INIT,
  checkCarriers: [],
  checkFlightChanges: [],
  currentPrice: null,
  isLoading: false,
  isShowMoreButton: true,
  flightsByCheck: [],
  flightsByPrice: [],
  origFlights: [],
  sortKey: null,
  showCount: ShowCount.init(),
  showFlights: [],
  sortedFlights: [],
  userPrice: PRICE_INIT,

};

export const AppSearch = createReducer(initialStore, (builder)=>{
  builder

    .addCase(renderFlights, (state) => {
      const price = Flight.getPrice(state.flightsByCheck, state.userPrice);
      state.catalogPrice = price.catalogPrice;
      state.currentPrice = price.currentPrice;
      state.userPrice = price.userPrice;
      state.flightsByPrice = Flight.priceFiltering(state.flightsByCheck, state.currentPrice);
      state.sortedFlights = state.sortKey ? Flight.sort(state.flightsByPrice, state.sortKey): state.flightsByPrice;
      state.showCount = ShowCount.init();
      state.showFlights = Flight.show(state.sortedFlights, state.showCount);
      state.isShowMoreButton = state.showFlights.length !== state.sortedFlights.length;
    })

    .addCase(setCheckCarriers, (state, action) => {
      state.checkCarriers = action.payload;
      state.flightsByCheck = Flight.checkboxFiltering(state.origFlights, state.checkCarriers, state.checkFlightChanges);
    })

    .addCase(setCheckFlightChanges, (state, action) => {
      state.checkFlightChanges = action.payload;
      state.flightsByCheck = Flight.checkboxFiltering(state.origFlights, state.checkCarriers, state.checkFlightChanges);
    })

    .addCase(setUserPrice, (state, action) => {
      state.userPrice = action.payload;
    })

    .addCase(setIsLoaded, (state) => {
      state.isLoading = false;
    })

    .addCase(setIsLoading, (state) => {
      state.isLoading = true;
    })

    .addCase(setCount, (state) => {
      state.showCount = ShowCount.bang(state.showCount);
      state.showFlights = Flight.show(state.sortedFlights, state.showCount);
    })

    .addCase(setOrigFlights, (state, action) => {
      state.origFlights = action.payload;
      const checkboxInit = Flight.checkboxInit(state.origFlights);
      state.checkFlightChanges = checkboxInit.flightChangesSet;
      state.checkCarriers = checkboxInit.carriersSet;
      state.flightsByCheck = Flight.checkboxFiltering(state.origFlights, state.checkCarriers, state.checkFlightChanges);
    })

    .addCase(setSortKey, (state, action) => {
      state.sortKey = action.payload;
      state.sortedFlights = Flight.sort(state.flightsByPrice, state.sortKey);
      state.showCount = ShowCount.init();
      state.showFlights = Flight.show(state.sortedFlights, state.showCount);
      state.isShowMoreButton = state.showFlights.length !== state.sortedFlights.length;
    });
});

