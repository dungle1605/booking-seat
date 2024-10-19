import { STAFF_SIGNIN_SUCCESS, STAFF_SIGNOUT_SUCCESS } from '../../constants/constants';

const initState = null;

export default (state = initState, action) => {
  switch (action.type) {
    case STAFF_SIGNIN_SUCCESS:
      return {
        id: action.payload.id,
        role: action.payload.role,
        provider: action.payload.provider
      };
    case STAFF_SIGNOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
