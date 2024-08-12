import {
  call,
  delay,
  put,
  type CallEffect,
  type PutEffect,
} from 'redux-saga/effects';
import { putHotels } from '../slices/hotels';
import api from '@/api/api';
import { omitEmptyParams } from '@/utils/helpers';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IFilters, IHotels, ResponseHotels } from '@/appTypes';
import type { AxiosResponse } from 'axios';
import type { AnyAction } from 'redux-saga';

export function* hotelsFetchSaga({
  payload,
}: PayloadAction<IFilters>): Generator<
  CallEffect<AxiosResponse<ResponseHotels[]>> | PutEffect<AnyAction>,
  void,
  AxiosResponse<ResponseHotels[]>
> {
  try {
    const response = yield call(api.getHotels, {
      params: omitEmptyParams(payload),
    });

    const hotels: IHotels[] = response.data.map(hotel => ({
      id: hotel._id,
      image: hotel.imageId,
      ...hotel,
    }));
    yield put(putHotels(hotels));
  } catch (e) {
    console.log('error in saga:  citiesFetchSaga', e);
  }
}
