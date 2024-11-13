import authReducer from './authReducer';
import miscReducer from './miscReducer';
import tripReducer from './tripReducer';

const rootReducer = {
  trips: tripReducer,
  app: miscReducer,
  auth: authReducer
};

export default rootReducer;
