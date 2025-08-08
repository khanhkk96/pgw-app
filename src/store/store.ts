import { configureStore } from '@reduxjs/toolkit';
import AppReducer from '@pages/App/store/appSlice';

export const store = configureStore({
  reducer: {
    appReducer: AppReducer,
  },
});
store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
