import { takeEvery, select } from 'redux-saga/effects';
import {buferRequest}  from "../reducers/index"

export function* workerSaga() {
    const {key}  = yield select(({ request }) => request.coordinatesRequest);
    console.log(`Заявка ${key}`)
    yield;
}

export function* watchClickSaga() {
    yield takeEvery(buferRequest,workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}