import { cityReducer } from './slices/city';
import { countryReducer } from './slices/country';
import { alertReducer } from './slices/alert';
import { userReducer } from './slices/user';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { typeReducer } from './slices/type';

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      alert: alertReducer,
      country: countryReducer,
      city: cityReducer,
      type: typeReducer,
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
