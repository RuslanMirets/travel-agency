import { countrySlice } from './../slices/country';
import { AppDispatch } from '..';
import { ICountry } from '../../types/country';
import { postAPI, getAPI } from '../../utils/fetchData';
import { alertSlice } from '../slices/alert';

export const getCountries = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('country');
    dispatch(countrySlice.actions.getCountries(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const createCountry = (data: ICountry) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('country', data);
    dispatch(countrySlice.actions.createCountry(response.data));

    const getResponse = await getAPI('country');
    dispatch(countrySlice.actions.getCountries(getResponse.data));

    dispatch(alertSlice.actions.success('Страна добавлена'));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
