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
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('image', data.image[0]);

    const response = await postAPI('country', formData);
    dispatch(countrySlice.actions.createCountry(response.data));

    const getResponse = await getAPI('country');
    dispatch(countrySlice.actions.getCountries(getResponse.data));

    dispatch(alertSlice.actions.success('Страна добавлена'));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const getAbroadCountries = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('country/abroad');
    dispatch(countrySlice.actions.getAbroadCountries(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
