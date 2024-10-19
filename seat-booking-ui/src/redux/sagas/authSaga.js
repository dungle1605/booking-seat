import {
    ON_STAFF_AUTHSTATE_FAIL,
    ON_STAFF_AUTHSTATE_SUCCESS, 
    SET_AUTH_PERSISTENCE,
    STAFF_SIGNIN,
    STAFF_SIGNOUT, 
    STAFF_SIGNUP
  } from '../../constants/constants';
  import { STAFF_SIGNIN as ROUTE_SIGNIN } from '../../constants/routes';
  import { call, put } from 'redux-saga/effects';

  import { setAuthenticating, setAuthStatus } from '../actions/miscActions';

function* initRequest(){
    yield put(setAuthenticating())
    yield put(setAuthStatus({}));
}

function* authSaga({ type, payload }){
    switch(type){
        case STAFF_SIGNIN:
            try{
                yield initRequest();
                console.log("Call API to signIn for Staff")
            } catch(e){

            }
    }
}

export default authSaga;