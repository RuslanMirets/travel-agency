import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ICity } from '../../types/city';

export interface CityState {
  cities: ICity[];
  city: ICity | null;
}

const initialState: CityState = {
  cities: [],
  city: null,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    getCities(state, action) {
      state.cities = action.payload;
    },
    createCity(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.city };
    },
  },
});

export const cityReducer = citySlice.reducer;
