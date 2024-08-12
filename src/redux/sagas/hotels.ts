import { delay, put } from 'redux-saga/effects';

export function* hotelsFetchSaga() {
  console.log('hotels saga');
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}
