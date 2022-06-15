import {NameSpace} from '../root-reducer';
import {StateType} from '../../types/state-type';
import {FlightType} from '../../types/flight-type';
import {CarrierCheckboxType, FlightChangeCheckboxType} from '../../types/checkbox-type';
import {CatalogPriceType} from '../../types/catalog-price-type';

export const getCatalogPrice = (state:StateType): CatalogPriceType => state[NameSpace.Search].catalogPrice;
export const getCheckCarriers = (state:StateType): CarrierCheckboxType[] => state[NameSpace.Search].checkCarriers;
export const getCheckFlightChanges = (state:StateType): FlightChangeCheckboxType[] => state[NameSpace.Search].checkFlightChanges;
export const getIsLoading = (state: StateType): boolean => state[NameSpace.Search].isLoading;
export const getIsShowMoreButton = (state:StateType): boolean => state[NameSpace.Search].isShowMoreButton;
export const getShowFlights = (state:StateType): FlightType[] => state[NameSpace.Search].showFlights;
export const getUserPrice = (state:StateType): CatalogPriceType => state[NameSpace.Search].userPrice;

