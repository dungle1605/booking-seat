import {
  CLEAR_SEARCH_STATE,
  GET_TRIPS_SUCCESS,
  SEARCH_TRIP_SUCCESS
} from '../../constants/constants';

const initState = {
  total: 0,
  items: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
  total: 0,
  items: [],
  searchedTrips: initState
}, action) => {
  switch (action.type) {
    case GET_TRIPS_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        total: action.payload.total,
        items: [...state.items, ...(action.payload.trips.value || [])]
      };
    // case ADD_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     items: [...state.items, action.payload]
    //   };
    case SEARCH_TRIP_SUCCESS:
      return {
        ...state,
        searchedTrips: {
          total: action.payload.total,
          items: [...state.searchedTrips.items, ...action.payload.trips]
        }
      };
    case CLEAR_SEARCH_STATE:
      return {
        ...state,
        searchedProducts: initState
      };
    // case REMOVE_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     items: state.items.filter((product) => product.id !== action.payload)
    //   };
    // case EDIT_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     items: state.items.map((product) => {
    //       if (product.id === action.payload.id) {
    //         return {
    //           ...product,
    //           ...action.payload.updates
    //         };
    //       }
    //       return product;
    //     })
    //   };
    default:
      return state;
  }
};
