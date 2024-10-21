import * as ACTION from '../../constants/constants';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import authSaga from './authSaga';

function* rootSaga() {
  yield takeEvery([
    ACTION.STAFF_SIGNIN,
    ACTION.STAFF_SIGNUP,
    ACTION.STAFF_SIGNOUT,
    ACTION.ON_AUTHSTATE_CHANGED,
    ACTION.ON_STAFF_AUTHSTATE_SUCCESS,
    ACTION.ON_STAFF_AUTHSTATE_FAIL,
    ACTION.SET_AUTH_PERSISTENCE,
    ACTION.STAFF_RESET_PASSWORD,


    ACTION.USER_SIGNIN,
    ACTION.USER_SIGNUP,
    ACTION.USER_SIGNOUT,
    ACTION.SIGN_UP_PHONENUMBER_OTP
  ], authSaga);
  
//   yield takeLatest([
//     ACTION.ADD_PRODUCT,
//     ACTION.SEARCH_PRODUCT,
//     ACTION.REMOVE_PRODUCT,
//     ACTION.EDIT_PRODUCT,
//     ACTION.GET_PRODUCTS
//   ], productSaga);

  
//   yield takeLatest([
//     ACTION.UPDATE_EMAIL,
//     ACTION.UPDATE_PROFILE
//   ], profileSaga);
}

export default rootSaga;
