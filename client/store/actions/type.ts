import { AppDispatch } from '..';
import { getAPI } from '../../utils/fetchData';
import { alertSlice } from '../slices/alert';
import { typeSlice } from '../slices/type';

export const getTypes = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('type');
    dispatch(typeSlice.actions.getTypes(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const getTypeDetail = (slug: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`type/${slug}`);
    dispatch(typeSlice.actions.getTypeDetail(response.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};
