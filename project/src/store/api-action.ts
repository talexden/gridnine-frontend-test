import {toast} from 'react-toastify';
import {APIRoute, ErrorTexts} from '../common/const';
import {ThunkActionResult} from '../types/action-type';
import {renderFlights, setIsLoaded, setIsLoading, setOrigFlights} from './action';
import {FlightType} from '../types/flight-type';
import {Adapter} from '../components/adapter/adapter';

export const fetchFlights = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try{
      dispatch(setIsLoading());
      const {data} = await api.get(APIRoute.Search);
      const flights: FlightType[] = data.result.flights.map(Adapter.adaptToClient);
      dispatch(setOrigFlights(flights));
      dispatch(renderFlights());
      dispatch(setIsLoaded());
    } catch (error) {
      toast.info(ErrorTexts.LoadGuitarsFailMessage);
    }
  };
