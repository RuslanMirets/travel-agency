import { AppDispatch } from '..';
import { getAPI } from '../../utils/fetchData';
import { kindSlice } from './../slices/kind';

export const getKinds = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('kind');
    dispatch(kindSlice.actions.getKinds(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
