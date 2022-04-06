import { AppDispatch } from '..';
import { getAPI } from '../../utils/fetchData';
import { userSlice } from '../slices/user';

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('user');
    dispatch(userSlice.actions.getUsers(response.data));
  } catch (error: any) {
    console.log(error);
  }
};
