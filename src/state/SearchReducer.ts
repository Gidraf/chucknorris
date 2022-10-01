

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import Constants from '../utils/Constants';
import type { RootState } from './Store';

const searchSlice = createSlice({
  name: 'searchJoke',
  initialState: [],
  reducers: {
    searchReducer: {
      reducer: (state, action: PayloadAction<[]>) => (state = action.payload),
      prepare: (value?: []) => ({ payload: value || [] }),
    },
  },
});

export const searchJoke = (state: RootState) => state.searchJoke;

export const { searchReducer } = searchSlice.actions;
export default searchSlice.reducer;