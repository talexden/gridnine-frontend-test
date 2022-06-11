import {combineReducers} from '@reduxjs/toolkit';
import {AppSearch} from './app-search/app-search';


export enum NameSpace {
  filter = 'FILTER',
}

export const rootReducer = combineReducers({
  [NameSpace.filter]: AppSearch,
});

export type RootState = ReturnType<typeof rootReducer>;
