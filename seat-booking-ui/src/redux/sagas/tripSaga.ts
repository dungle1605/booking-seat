/* eslint-disable indent */
import {
  GET_TRIPS,
  SEARCH_TRIP
} from '../../constants/constants';
// import { ADMIN_PRODUCTS } from '@/constants/routes';
// import { displayActionMessage } from '@/helpers/utils';
import {
  all, call, put, select
} from 'redux-saga/effects';
import { setLoading, setRequestStatus } from '../actions/miscActions';
// import { history } from '@/routers/AppRouter';
import {
  clearSearchState, getTripsSuccess,
  searchTripSuccess
} from '../actions/tripActions';
import axios from 'axios';
import { TripDataType } from "data/types";

function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(e: any) {
  yield put(setLoading(false));
  yield put(setRequestStatus(e?.message || 'Failed to fetch trips'));
  console.log('ERROR: ', e);
}

// function* handleAction(location, message, status) {
//   if (location) yield call(history.push, location);
//   yield call(displayActionMessage, message, status);
// }

function* tripSaga({ type, payload }: any) {
  switch (type) {
    case GET_TRIPS:
      try {
        yield initRequest();
        const result: {data: TripDataType[]} = yield call(axios.get, 'https://sb-qa.runasp.net/api/v1/trips');

        if (result.data.length === 0) {
          handleError('No items found.');
        } else {
          yield put(getTripsSuccess({
            trips: result.data,
            total: result.data.length
          }));
          yield put(setRequestStatus(''));
        }
        // yield put({ type: SET_LAST_REF_KEY, payload: result.lastKey });
        yield put(setLoading(false));
      } catch (e) {
        console.log(e);
        yield handleError(e);
      }
      break;
    // case SEARCH_PRODUCT: {
    //   try {
    //     yield initRequest();
    //     // clear search data
    //     yield put(clearSearchState());

    //     const state = yield select();
    //     const result = yield call(firebase.searchProducts, payload.searchKey);

    //     if (result.products.length === 0) {
    //       yield handleError({ message: 'No product found.' });
    //       yield put(clearSearchState());
    //     } else {
    //       yield put(searchProductSuccess({
    //         products: result.products,
    //         lastKey: result.lastKey ? result.lastKey : state.products.searchedProducts.lastRefKey,
    //         total: result.total ? result.total : state.products.searchedProducts.total
    //       }));
    //       yield put(setRequestStatus(''));
    //     }
    //     yield put(setLoading(false));
    //   } catch (e) {
    //     yield handleError(e);
    //   }
    //   break;
    // }
    default: {
      throw new Error(`Unexpected action type ${type}`);
    }
  }
}

export default tripSaga;
