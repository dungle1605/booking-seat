import * as ACTION from '../../constants/constants';
import { takeLatest } from 'redux-saga/effects';
import authSaga from './authSaga';
import tripSaga from './tripSaga';

function* rootSaga() {
  yield takeLatest([
    ACTION.SIGNIN,
    ACTION.SIGNUP,
    ACTION.SETTING_SIGNUP_PASSWORD
  ], authSaga);
  yield takeLatest([
    ACTION.GET_TRIPS,
    ACTION.SEARCH_TRIP
  ], tripSaga);
}

export default rootSaga;
