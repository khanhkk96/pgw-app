import { createSlice } from '@reduxjs/toolkit';
import type { AppStore } from './types';

const initState: AppStore = {
  loading: false,
  user: {},
  onRefresh: false,
  data: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState: initState,
  reducers: {
    changeLoading: (state, action) => ({
      ...state,
      loading: action.payload.loading,
    }),
    onRefresh: (state, action) => ({
      ...state,
      onRefresh: action.payload.onRefresh,
    }),
    setUser: (state, action) => {
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    },
  },
});

export const { setUser, onRefresh, changeLoading } = appSlice.actions;
export default appSlice.reducer;
