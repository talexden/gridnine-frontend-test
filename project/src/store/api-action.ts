import {toast} from 'react-toastify';
import {APIRoute, ErrorTexts} from '../common/const';
import {ThunkActionResult} from '../types/action-type';
import {setIsLoaded, setIsLoading, setTickets} from './action';

export const fetchGuitars = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try{
      dispatch(setIsLoading());
      const {data} = await api.get(APIRoute.BackendUrl);
      const tiskets = data.map(Adapter.adaptToClient);
      dispatch(setTickets(tiskets));
      dispatch(setIsLoaded());
    } catch (error) {
      dispatch(setGuitars()); // моки, удалить
      dispatch(setIsLoaded()); // моки, удалить
      toast.info(ErrorTexts.LoadGuitarsFailMessage);
    }
  };
