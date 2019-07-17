import { put, call, getContext, takeEvery, select } from 'redux-saga/effects';

import { SHOW, MORE } from './constants';
import { show, onRequest, onSuccess, onFailure } from './actions';
import { fetchData } from '../services/api';
import { metaSelector } from './meta/selectors';

function* watchFetch() {
  yield put(onRequest());
  let apiClient = yield getContext('apiClient');

  if (apiClient === undefined) {
    throw 'apiClient is not set';
  }

  try {
    let meta = yield select(metaSelector);
    const trucks = yield call([apiClient, fetchData], meta);
    const hasMore = trucks.length > meta.pagination.limit;
    yield put(onSuccess(trucks.splice(0, meta.pagination.limit), hasMore));
  } catch (e) {
    yield put(onFailure());
  }
}

export default function*() {
  yield takeEvery([SHOW, MORE], watchFetch);
}
