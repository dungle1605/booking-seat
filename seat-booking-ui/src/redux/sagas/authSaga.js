import {
  SIGNIN, SIGNUP, SETTING_SIGNUP_PASSWORD
} from '../../constants/constants';
import { call, put, select } from 'redux-saga/effects';
import { settingOTP, clearSignUpProfile, signInSuccess } from '../../redux/actions/authActions';
import { setAuthenticating, setAuthStatus } from '../../redux/actions/miscActions';

function* handleError(e) {
  const obj = { success: false, type: 'auth', isError: true };
  yield put(setAuthenticating(false));

  switch (e.code) {
    case 'auth/network-request-failed':
      yield put(setAuthStatus({ ...obj, message: 'Network error has occured. Please try again.' }));
      break;
    case 'auth/email-already-in-use':
      yield put(setAuthStatus({ ...obj, message: 'Email is already in use. Please use another email' }));
      break;
    case 'auth/wrong-password':
      yield put(setAuthStatus({ ...obj, message: 'Incorrect email or password' }));
      break;
    case 'auth/user-not-found':
      yield put(setAuthStatus({ ...obj, message: 'Incorrect email or password' }));
      break;
    case 'auth/reset-password-error':
      yield put(setAuthStatus({ ...obj, message: 'Failed to send password reset email. Did you type your email correctly?' }));
      break;
    default:
      yield put(setAuthStatus({ ...obj, message: e.message }));
      break;
  }
}

function* initRequest() {
  yield put(setAuthenticating());
  yield put(setAuthStatus({}));
}

function* authSaga({ type, payload }) {
  switch (type) {
    case SIGNIN:
      try {
        yield initRequest();
        // After SignIn, get information from API
        yield put(signInSuccess({phoneNumber: payload.phoneNumber, name: "Michael", role: "user"}))
      } catch (e) {
        yield handleError(e);
      }
      break;
    case SIGNUP:
      try {
        yield initRequest();
        console.log('PhoneNumber - ' + payload)
        // Call API to check whether the phoneNumber is existing in this system
        var existedPhoneNumber = ['111'];
        if (existedPhoneNumber.includes(payload)) {
          console.log('PhoneNumber already existed.')
        }
        else {
          // Call API to get OTP from BE side
          const fakeOtp = '123456'

          yield put(settingOTP({phoneNumber: payload, otp: fakeOtp}))
        }
      } catch (e) {
        yield handleError(e);
      }
      break;
    case SETTING_SIGNUP_PASSWORD:
      try {
        yield initRequest();
        const state = yield select();

        // send API with phoneNumber, Otp, password for signUp

        // clear Information in State
        yield put(clearSignUpProfile())
      }
      catch (e) {

      }
      break;
    default: {
      throw new Error('Unexpected Action Type.');
    }
  }
}

export default authSaga;
