import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ICountry } from '../../types/country';

export interface CountryState {
  countries: ICountry[];
  country: ICountry | null;
}

const initialState: CountryState = {
  countries: [],
  country: null,
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
    },
    createCountry(state, action) {
      state.country = action.payload;
    },
    getAbroadCountries(state, action) {
      state.countries = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.country };
    },
  },
});

export const countryReducer = countrySlice.reducer;
