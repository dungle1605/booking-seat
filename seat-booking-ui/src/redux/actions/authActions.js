import * as type from '../../constants/constants';

export const signIn = (userName, password) => ({
    type: type.STAFF_SIGNIN,
    payload: {
        userName,
        password
    }
})