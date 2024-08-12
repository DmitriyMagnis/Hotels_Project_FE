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
  items: [
    {
      id: 'string',
      name: 'House with Panoramic Windows by the Lake',
      cityId: 'id',
      adults: 2,
      children: 1,
      checkInTime: new Date(),
      checkOutTime: new Date(),
      image: '1',
      description:
        'This cozy house with a lake view is perfect for a peaceful getaway in nature. Spacious rooms with large panoramic windows are filled with light throughout the day. The house features three bedrooms, a modern open-plan kitchen, and a large living room with a fireplace. The property includes a terrace for barbecues and a private pier where you can enjoy fishing or simply admire the sunset.',
      rooms: 2,
    },
  ],
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
      state.items.concat(action.payload);
    },
  },

  selectors: {
    selectHotels: hotels => hotels.items,
  },
});

export const fetchAllHotels = createAction<any>('FETCH_HOTELS_BY_FILTERS');

export const { putHotels, setHotelLoader } = hotelsSlice.actions;
export const { selectHotels } = hotelsSlice.selectors;
