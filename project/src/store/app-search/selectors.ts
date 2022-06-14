import {NameSpace} from '../root-reducer';
import {StateType} from '../../types/state-type';
import {FlightType} from '../../types/flight-type';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../../types/checkbox-type';

export const getIsLoading = (state: StateType): boolean => state[NameSpace.Search].isLoading;
export const getShowFlights = (state:StateType): FlightType[] => state[NameSpace.Search].showFlights;
export const getCheckCarriers = (state:StateType): CarrierCheckboxType[] => state[NameSpace.Search].checkCarriers;
export const getCheckFlightChanges = (state:StateType): FlightChangeCheckboxType[] => state[NameSpace.Search].checkFlightChanges;
