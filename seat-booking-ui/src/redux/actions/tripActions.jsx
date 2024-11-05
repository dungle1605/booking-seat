import {
  CLEAR_SEARCH_STATE,
  GET_TRIPS,
  GET_TRIPS_SUCCESS,
  SEARCH_TRIP,
  SEARCH_TRIP_SUCCESS,
} from "../../constants/constants";

export const getTrips = () => ({
  type: GET_TRIPS,
});

export const getTripsSuccess = (trips) => ({
  type: GET_TRIPS_SUCCESS,
  payload: trips,
});

export const searchTrip = (searchKey) => ({
  type: SEARCH_TRIP,
  payload: {
    searchKey,
  },
});

export const searchTripSuccess = (trips) => ({
  type: SEARCH_TRIP_SUCCESS,
  payload: trips,
});

export const clearSearchState = () => ({
  type: CLEAR_SEARCH_STATE,
});
