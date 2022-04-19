import { IComplex } from './../../types/complex';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface ComplexState {
  complexes: IComplex[];
  complex: IComplex | null;
}

const initialState: ComplexState = {
  complexes: [],
  complex: null,
};

export const complexSlice = createSlice({
  name: 'complex',
  initialState,
  reducers: {
    getComplexes(state, action) {
      state.complexes = action.payload;
    },
    createComplex(state, action: PayloadAction<IComplex>) {
      state.complex = action.payload;
    },
    updateComplex(state, action: PayloadAction<IComplex>) {
      state.complex = action.payload;
    },
    deleteComplex(state, action: PayloadAction<IComplex>) {
      state.complex = action.payload;
    },
    deleteAllComplexes(state, action: PayloadAction<IComplex>) {
      state.complex = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.complex };
    },
  },
});

export const complexReducer = complexSlice.reducer;
