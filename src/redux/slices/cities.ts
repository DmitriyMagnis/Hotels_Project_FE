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
    putHotels(state, action: PayloadAction<ICities[]>) {
      state.items.concat(action.payload);
    },
  },

  selectors: {
    selectCities: cities => cities.items,
  },
});

export const fetchAllCities = createAction<any>('FETCH_CITIES');

export const { putHotels, setCitiesLoader } = citiesSlice.actions;
export const { selectCities } = citiesSlice.selectors;
