import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../slices/headerSlice';
import bibleReducer from '../slices/bibleSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    bible: bibleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;