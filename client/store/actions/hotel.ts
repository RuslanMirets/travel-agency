import { IHotel } from './../../types/hotel';
import { AppDispatch } from '..';
import { getAPI, postAPI } from '../../utils/fetchData';
import { hotelSlice } from './../slices/hotel';
import { alertSlice } from '../slices/alert';

export const getHotels = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('hotel');
    dispatch(hotelSlice.actions.getHotels(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export const createHotel = (data: IHotel) => async (dispatch: AppDispatch) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('complexId', data.complexId as any);
    formData.append('image', data.image[0]);

    const response = await postAPI('hotel', formData);
    dispatch(hotelSlice.actions.createHotel(response.data));
    dispatch(alertSlice.actions.success('Отель добавлен'));

    const getResponse = await getAPI('hotel');
    dispatch(hotelSlice.actions.getHotels(getResponse.data));
  } catch (error: any) {
    dispatch(alertSlice.actions.errors(error.response.data.message));
  }
};

export const getHotelById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI(`hotel/${id}`);
    dispatch(hotelSlice.actions.getHotelById(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
