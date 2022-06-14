import {createReducer} from '@reduxjs/toolkit';
import {
  setIsLoading,
  setIsLoaded,
  setFlights,
  setCount,
  setOrigFlights,
  setSortKey, setCheckCarriers, setCheckFlightChanges, renderFlights
} from '../action';
import {FlightType} from '../../types/flight-type';
import {SortKey} from '../../common/const';
import {ShowCount} from '../logic/count/count';
import Flight from '../logic/flight/flight';
import Checkbox from '../logic/checkbox/checkbox';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../../types/checkbox-type';

export type AppSearchType = {
  checkCarriers: CarrierCheckboxType[],
  checkFlightChanges: FlightChangeCheckboxType[],
  isLoading: boolean,
  isShowMoreButton: boolean,
  flightsByCheck: FlightType[],
  origFlights: FlightType[],
  sortKey: SortKey | null,
  showCount: number,
  showFlights: FlightType[],
  sortedFlights: FlightType[],
}

const initialStore: AppSearchType = {
  checkCarriers: [],
  checkFlightChanges: [],
  isLoading: false,
  isShowMoreButton: true,
  flightsByCheck: [],
  origFlights: [],
  sortKey: null,
  showCount: ShowCount.init(),
  showFlights: [],
  sortedFlights: [],
};

export const AppSearch = createReducer(initialStore, (builder)=>{
  builder

    .addCase(renderFlights, (state) => {
      state.flightsByCheck = Checkbox.filterByCheckbox(state.origFlights, state.checkCarriers, state.checkFlightChanges);
      state.sortedFlights = state.sortKey ? Flight.sort(state.flightsByCheck, state.sortKey): state.flightsByCheck;
      state.showCount = ShowCount.init();
      state.showFlights = Flight.show(state.sortedFlights, state.showCount);
      state.isShowMoreButton = Flight.getIsShowMoreButton();
    })

    .addCase(setCheckCarriers, (state, action) => {
      state.checkCarriers = action.payload;
    })

    .addCase(setCheckFlightChanges, (state, action) => {
      state.checkFlightChanges = action.payload;
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

    .addCase(setFlights, (state, action) => {
      state.showFlights = action.payload;
    })

    .addCase(setOrigFlights, (state, action) => {
      state.origFlights = action.payload;
      const checkboxes = Checkbox.getCheckboxSets(state.origFlights);
      state.checkFlightChanges = checkboxes.flightChangesSet;
      state.checkCarriers = checkboxes.carriersSet;
    })

    .addCase(setSortKey, (state, action) => {
      state.sortKey = action.payload;
      state.sortedFlights = Flight.sort(state.flightsByCheck, state.sortKey);
      state.showCount = ShowCount.init();
      state.showFlights = Flight.show(state.sortedFlights, state.showCount);
      state.isShowMoreButton = Flight.getIsShowMoreButton();
    });
});

