import * as ACTION from '../../constants/constants';

const initState = null;

export default (state = initState, action) => {
  switch (action.type) {
    case ACTION.SETTING_OTP:
      return {
        phoneNumber: action.payload.phoneNumber,
        otp: action.payload.otp
      }
    case ACTION.SIGNIN_SUCCESS:
      return {
        phoneNumber: action.payload.phoneNumber,
        name: action.payload.name,
        role: action.payload.role
      };
    case ACTION.CLEAR_SIGNUP_PROFILE:
      return {
        phoneNumber: null,
        otp: null
      }
    case ACTION.SIGNOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
