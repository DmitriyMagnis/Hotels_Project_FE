import type { IHotels, STATUSES } from '@/appTypes';
import {
  createAction,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

export interface HotelSliceState {
  items: IHotels[];
  status: STATUSES;
}

const initialState: HotelSliceState = {
  items: [],
  status: 'idle',
};

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,

  reducers: {
    setHotelLoader(state, action: PayloadAction<STATUSES>) {
      state.status = action.payload;
    },
    putHotels(state, action: PayloadAction<IHotels[]>) {
      state.items = action.payload;
    },
  },

  selectors: {
    selectHotels: hotels => hotels.items,
  },
});

export const fetchAllHotels = createAction<any>('FETCH_HOTELS_BY_FILTERS');

export const { putHotels, setHotelLoader } = hotelsSlice.actions;
export const { selectHotels } = hotelsSlice.selectors;
