import * as actionTypes from "./actionTypes";

export const searchArtists = (value, next) => {
  return {
    type: actionTypes.SEARCH_ARTISTS,
    value: value,
    next: next,
  };
};

export const searchArtistsStart = () => {
  return {
    type: actionTypes.SEARCH_ARTISTS_START,
  };
};

export const searchArtistsSuccess = (result) => {
  return {
    type: actionTypes.SEARCH_ARTISTS_SUCCESS,
    result: result,
  };
};

export const searchArtistsFail = (error) => {
  return {
    type: actionTypes.SEARCH_ARTISTS_FAIL,
    error: error,
  };
};
