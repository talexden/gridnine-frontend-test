import {NameSpace} from '../root-reducer';
import {StateType} from '../../types/state-type';

export const getIsLoading = (state: StateType): boolean => state[NameSpace.filter].isLoading;
