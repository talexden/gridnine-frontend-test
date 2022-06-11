import {createReducer} from '@reduxjs/toolkit';

import {
  setIsLoading,
  setIsLoaded, setTickets
} from '../action';

export type AppFilterType = {
  isLoading: boolean,
  tickets: TicketsType[]
}

const initialStore: AppFilterType = {
  isLoading: false,
  tickets: []
};

export const AppSearch = createReducer(initialStore, (builder)=>{
  builder


    .addCase(setIsLoaded, (state) => {
      state.isLoading = false;
    })

    .addCase(setIsLoading, (state) => {
      state.isLoading = true;
    })

    .addCase(setTickets, (state, action) => {
      state.tickets = action.payload;
    });
});
