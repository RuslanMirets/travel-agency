import { AppDispatch } from '..';
import { ICity } from '../../types/city';
import { postAPI, getAPI } from '../../utils/fetchData';
import { alertSlice } from '../slices/alert';
import { citySlice } from '../slices/city';

export const getCities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('city');
    dispatch(citySlice.actions.getCities(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const createCity = (data: ICity) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('city', data);
    dispatch(citySlice.actions.createCity(response.data));

    const getResponse = await getAPI('city');
    dispatch(citySlice.actions.getCities(getResponse.data));

    dispatch(alertSlice.actions.success('Город добавлен'));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const getRussianCities = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('city/russia');
    dispatch(citySlice.actions.getRussianCities(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
