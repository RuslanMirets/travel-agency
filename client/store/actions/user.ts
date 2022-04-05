import { postAPI } from './../../utils/fetchData';
import { IUser } from './../../types/user';
import { AppDispatch } from '..';
import { getAPI } from '../../utils/fetchData';
import { userSlice } from '../slices/user';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('user');
    dispatch(userSlice.actions.getUsers(response.data));
  } catch (error: any) {
    console.log(error);
  }
};

export const login = (data: IUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/login', data);
    setCookie(null, 'travelAgencyToken', response.data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    dispatch(userSlice.actions.login(response.data));
  } catch (error: any) {
    console.log(error);
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    destroyCookie(null, 'travelAgencyToken', null);
    dispatch(userSlice.actions.logout());
  } catch (error: any) {
    console.log(error);
  }
};

export const getMe = (ctx: any) => async (dispatch: AppDispatch) => {
  try {
    const { travelAgencyToken } = parseCookies(ctx);
    const response = await getAPI('user/profile', travelAgencyToken);
    dispatch(userSlice.actions.login(response.data));
  } catch (error) {
    console.log('Unauthorized');
  }
};
