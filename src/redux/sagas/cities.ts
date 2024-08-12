import api from '@/api/api';
import { call, put, type CallEffect, type PutEffect } from 'redux-saga/effects';
import { putCities } from '../slices/cities';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IFilters, ResponseCities } from '@/appTypes';
import type { AxiosResponse } from 'axios';
import type { AnyAction } from 'redux-saga';
import { omitEmptyParams } from '@/utils/helpers';

export function* citiesFetchSaga({
  payload,
}: PayloadAction): Generator<
  CallEffect<AxiosResponse<ResponseCities[]>> | PutEffect<AnyAction>,
  void,
  AxiosResponse<ResponseCities[]>
> {
  try {
    const response = yield call(api.getCities);

    const cities = response.data.map(c => ({ name: c.name, id: c._id }));
    yield put(putCities(cities));
  } catch (e) {
    console.log('error in saga:  citiesFetchSaga', e);
  }
}
