import { delay, put } from 'redux-saga/effects';

export function* citiesFetchSaga() {
  console.log('cities saga');
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}
