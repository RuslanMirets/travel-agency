import { kindReducer } from './slices/kind';
import { hotelReducer } from './slices/hotel';
import { complexReducer } from './slices/complex';
import { alertReducer } from './slices/alert';
import { userReducer } from './slices/user';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      alert: alertReducer,
      complex: complexReducer,
      hotel: hotelReducer,
      kind: kindReducer,
    },
  });
}

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore);
