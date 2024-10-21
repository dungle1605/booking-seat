import * as type from '../../constants/constants';

export const signIn = (phoneNumber, password) => ({
    type: type.STAFF_SIGNIN,
    payload: {
        phoneNumber,
        password
    }
});

export const userSignIn = (phoneNumber, password) => ({
    type: type.USER_SIGNIN,
    payload: {
        phoneNumber,
        password
    }
});

export const singUpPhoneNumberOTP = (phoneNumber) => ({
    type: type.SIGN_UP_PHONENUMBER_OTP,
    payload: {
        phoneNumber
    }
})