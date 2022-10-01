

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import Constants from '../utils/Constants';
import type { RootState } from './Store';

const randomSlice = createSlice({
  name: 'randomJoke',
  initialState: [],
  reducers: {
    randomReducer: {
      reducer: (state, action: PayloadAction<[]>) => (state = action.payload),
      prepare: (value?: []) => ({ payload: value || [] }),
    },
  },
});

export const randomJoke = (state: RootState) => state.randomJoke;

export const { randomReducer } = randomSlice.actions;
export default randomSlice.reducer;