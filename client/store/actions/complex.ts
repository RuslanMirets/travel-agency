import { IComplex } from './../../types/complex';
import { AppDispatch } from '..';
import { getAPI, postAPI } from '../../utils/fetchData';
import { complexSlice } from './../slices/complex';
import { alertSlice } from '../slices/alert';

export const getComplexes = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('complex');
    dispatch(complexSlice.actions.getComplexes(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export const createComplex = (data: IComplex) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('complex', data);
    dispatch(complexSlice.actions.createComplex(response.data));
    dispatch(alertSlice.actions.success('Комплекс добавлен'));

    const getResponse = await getAPI('complex');
    dispatch(complexSlice.actions.getComplexes(getResponse.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
