import {toast} from 'react-toastify';
import {APIRoute, ErrorTexts} from '../common/const';
import {ThunkActionResult} from '../types/action-type';
import {setIsLoaded, setIsLoading, setFlights} from './action';
import {FlightType} from '../types/flight-type';
import {Adapter} from '../components/adapter/adapter';

export const fetchFlights = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try{
      dispatch(setIsLoading());
      const {data} = await api.get(APIRoute.Search);
      const flights: FlightType[] = data.result.flights.map(Adapter.adaptToClient);
      dispatch(setFlights(flights));
      dispatch(setIsLoaded());
    } catch (error) {
      toast.info(ErrorTexts.LoadGuitarsFailMessage);
    }
  };
