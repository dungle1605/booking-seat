import * as type from '../../constants/constants';

export const signIn = (phoneNumber, password) => ({
  type: type.SIGNIN,
  payload: {
    phoneNumber,
    password
  }
});

export const signUp = (phoneNumber) => ({
  type: type.SIGNUP,
  payload: phoneNumber
});

export const settingOTP = (otp) => ({
  type: type.SETTING_OTP,
  payload: otp
})

export const signInSuccess = (auth) => ({
  type: type.SIGNIN_SUCCESS,
  payload: auth
});

// export const setAuthPersistence = () => ({
//   type: type.SET_AUTH_PERSISTENCE
// });

// export const signOut = () => ({
//   type: type.SIGNOUT
// });

// export const signOutSuccess = () => ({
//   type: type.SIGNOUT_SUCCESS
// });

// export const onAuthStateChanged = () => ({
//   type: type.ON_AUTHSTATE_CHANGED
// });

// export const onAuthStateSuccess = (user) => ({
//   type: type.ON_AUTHSTATE_SUCCESS,
//   payload: user
// });

// export const onAuthStateFail = (error) => ({
//   type: type.ON_AUTHSTATE_FAIL,
//   payload: error
// });

// export const resetPassword = (email) => ({
//   type: type.RESET_PASSWORD,
//   payload: email
// });

