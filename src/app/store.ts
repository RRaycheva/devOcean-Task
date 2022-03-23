import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import BusinessReducer from '../redux/reducers/BusinessReducer'

export const store = configureStore({
  reducer: {
    BusinessReducer: BusinessReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
