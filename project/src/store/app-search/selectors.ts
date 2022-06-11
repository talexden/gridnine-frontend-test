import {NameSpace} from '../root-reducer';
import {StateType} from '../../types/stateType';

export const getIsLoading = (state: StateType): boolean => state[NameSpace.filter].isLoading;
