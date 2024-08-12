import type { ICities, STATUSES } from '@/appTypes';
import {
  createSlice,
  type PayloadAction,
  createAction,
} from '@reduxjs/toolkit';

export interface CitiesSliceState {
  items: ICities[];
  status: STATUSES;
}

const initialState: CitiesSliceState = {
  items: [],
  status: 'idle',
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,

  reducers: {
    setCitiesLoader(state, action: PayloadAction<STATUSES>) {
      state.status = action.payload;
    },
    putCities(state, action: PayloadAction<ICities[]>) {
      state.items = action.payload;
    },
  },

  selectors: {
    selectCities: cities => cities.items,
  },
});

export const fetchAllCities = createAction('FETCH_CITIES');

export const { putCities, setCitiesLoader } = citiesSlice.actions;
export const { selectCities } = citiesSlice.selectors;
