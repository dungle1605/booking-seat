import miscReducer from './miscReducer';
import tripReducer from './tripReducer';

const rootReducer = {
  trips: tripReducer,
  app: miscReducer
};

export default rootReducer;
