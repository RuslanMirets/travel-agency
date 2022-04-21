import { deleteAPI, patchAPI } from './../../utils/fetchData';
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
    dispatch(alertSlice.actions.success('Строение добавлено'));

    const getResponse = await getAPI('complex');
    dispatch(complexSlice.actions.getComplexes(getResponse.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const updateComplex = (data: IComplex, id: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await patchAPI(`complex/${id}`, data);
    dispatch(complexSlice.actions.updateComplex(response.data));
    dispatch(alertSlice.actions.success('Строение изменено'));

    const getResponse = await getAPI('complex');
    dispatch(complexSlice.actions.getComplexes(getResponse.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const deleteComplex = (id: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await deleteAPI(`complex/${id}`);
    dispatch(complexSlice.actions.deleteComplex(response.data));
    dispatch(alertSlice.actions.success('Строение удалено'));

    const getResponse = await getAPI('complex');
    dispatch(complexSlice.actions.getComplexes(getResponse.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const deleteAllComplexes = () => async (dispatch: AppDispatch) => {
  try {
    const response = await deleteAPI('complex');
    dispatch(complexSlice.actions.deleteAllComplexes(response.data));
    dispatch(alertSlice.actions.success('Все строения удалены'));

    const getResponse = await getAPI('complex');
    dispatch(complexSlice.actions.getComplexes(getResponse.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
