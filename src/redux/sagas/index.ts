import { takeEvery } from 'redux-saga/effects';
import { fetchAllHotels } from '@store/slices/hotels';
import { fetchAllCities } from '@store/slices/cities';
import { hotelsFetchSaga } from './hotels';
import { citiesFetchSaga } from './cities';

export default function* rootSaga() {
  yield takeEvery(fetchAllHotels.type, hotelsFetchSaga);
  yield takeEvery(fetchAllCities.type, citiesFetchSaga);
}
