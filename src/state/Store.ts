import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import randomReducer from './RandomReducer';
import categoryReducer from './Reducer';
import random from './Reducer';
import searchJoke from './SearchReducer';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    randomJoke:randomReducer,
    searchJoke:searchJoke
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;