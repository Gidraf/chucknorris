

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import Constants from '../utils/Constants';
import type { RootState } from './Store';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    categoryReducer: {
      reducer: (state, action: PayloadAction<[]>) => (state = action.payload),
      prepare: (value?: []) => ({ payload: value || [] }),
    },
  },
});

export const categories = (state: RootState) => state.categories;

export const { categoryReducer } = categorySlice.actions;
export default categorySlice.reducer;