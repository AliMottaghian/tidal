import * as actionTypes from "./actionTypes";
const initialState = {
  loading: false,
  result: null,
  error: null,
};

const searchArtistsStart = () => {
  const newState = {
    loading: true,
    result: null,
    error: null,
  };
  return newState;
};
const searchArtistsSuccess = (action) => {
  const newState = {
    loading: false,
    result: action.result,
    error: null,
  };
  return newState;
};

const searchArtistsFail = (action) => {
  const newState = {
    loading: false,
    result: null,
    error: action.error,
  };
  return newState;
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_ARTISTS_START:
      return searchArtistsStart();
    case actionTypes.SEARCH_ARTISTS_SUCCESS:
      return searchArtistsSuccess(action);
    case actionTypes.SEARCH_ARTISTS_FAIL:
      return searchArtistsFail(action);
    default:
      return state;
  }
};
