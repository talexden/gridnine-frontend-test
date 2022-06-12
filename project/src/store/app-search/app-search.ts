import {createReducer} from '@reduxjs/toolkit';

import {
  setIsLoading,
  setIsLoaded, setFlights
} from '../action';
import {FlightType} from '../../types/flight-type';

export type AppSearchType = {
  isLoading: boolean,
  flights: FlightType[]
}

const initialStore: AppSearchType = {
  isLoading: false,
  flights: [],
};

export const AppSearch = createReducer(initialStore, (builder)=>{
  builder


    .addCase(setIsLoaded, (state) => {
      state.isLoading = false;
    })

    .addCase(setIsLoading, (state) => {
      state.isLoading = true;
    })

    .addCase(setFlights, (state, action) => {
      state.flights = action.payload;
    });
});
