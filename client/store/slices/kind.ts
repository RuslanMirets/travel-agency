import { IKind } from './../../types/kind';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface KindState {
  kinds: IKind[];
  kind: IKind | null;
}

const initialState: KindState = {
  kinds: [],
  kind: null,
};

export const kindSlice = createSlice({
  name: 'kind',
  initialState,
  reducers: {
    getKinds(state, action) {
      state.kinds = action.payload;
    },
    createKind(state, action: PayloadAction<IKind>) {
      state.kind = action.payload;
    },
    updateKind(state, action: PayloadAction<IKind>) {
      state.kind = action.payload;
    },
    deleteKind(state, action: PayloadAction<IKind>) {
      state.kind = action.payload;
    },
    deleteAllKinds(state, action: PayloadAction<IKind>) {
      state.kind = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.kind };
    },
  },
});

export const kindReducer = kindSlice.reducer;
