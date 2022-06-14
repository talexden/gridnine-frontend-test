import {createReducer} from '@reduxjs/toolkit';
import {
  setIsLoading,
  setIsLoaded,
  setFlights,
  setCount,
  setOrigFlights,
  setSortKey, setCheckCarriers, setCheckFlightChanges
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
  origFlights: FlightType[],
  sortKey: SortKey | null,
  showCount: number,
  showFlights: FlightType[]
  sortedFlights: FlightType[]
}

const initialStore: AppSearchType = {
  checkCarriers: [],
  checkFlightChanges: [],
  isLoading: false,
  origFlights: [],
  sortKey: null,
  showCount: ShowCount.init(),
  showFlights: [],
  sortedFlights: [],
};

export const AppSearch = createReducer(initialStore, (builder)=>{
  builder

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
      state.checkFlightChanges = checkboxes[0];
      state.checkCarriers = checkboxes[1];
      state.sortedFlights = state.origFlights;
      state.showFlights = Flight.show(state.sortedFlights, state.showCount);
    })

    .addCase(setSortKey, (state, action) => {
      state.sortKey = action.payload;
      state.sortedFlights = Flight.sort(state.origFlights, state.sortKey);
      state.showCount = ShowCount.init();
      state.showFlights = Flight.show(state.sortedFlights, state.showCount);
    });
});
