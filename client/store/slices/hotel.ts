import { IHotel } from './../../types/hotel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface HotelState {
  hotels: IHotel[];
  hotel: IHotel | null;
}

const initialState: HotelState = {
  hotels: [],
  hotel: null,
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    getHotels(state, action) {
      state.hotels = action.payload;
    },
    createHotel(state, action: PayloadAction<IHotel>) {
      state.hotel = action.payload;
    },
    getHotelById(state, action) {
      state.hotel = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.hotel };
    },
  },
});

export const hotelReducer = hotelSlice.reducer;
