import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { AppDispatch } from '..';
import { IUser } from '../../types/user';
import { getAPI, postAPI } from '../../utils/fetchData';
import { userSlice } from '../slices/user';

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
    setCookie(null, 'travelAuthToken', response.data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    dispatch(userSlice.actions.login(response.data));
  } catch (error: any) {
    console.log(error);
  }
};

export const register = (data: IUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/register', data);
    dispatch(userSlice.actions.register(response.data));
  } catch (error: any) {
    console.log(error);
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    destroyCookie(null, 'travelAuthToken', null);
    dispatch(userSlice.actions.logout());
  } catch (error: any) {
    console.log(error);
  }
};

export const getMe = (ctx: any) => async (dispatch: AppDispatch) => {
  try {
    const { travelAuthToken } = parseCookies(ctx);
    const response = await getAPI('user/profile', travelAuthToken);
    dispatch(userSlice.actions.login(response.data));
  } catch (error) {
    console.log('Unauthorized');
  }
};
