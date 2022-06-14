import {combineReducers} from '@reduxjs/toolkit';
import {AppSearch} from './app-search/app-search';


export enum NameSpace {
  Search = 'FILTER',
}

export const rootReducer = combineReducers({
  [NameSpace.Search]: AppSearch,
});

export type RootState = ReturnType<typeof rootReducer>;
