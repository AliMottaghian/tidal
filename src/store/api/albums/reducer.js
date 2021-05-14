import * as actionTypes from "./actionTypes";
const initialState = {
  loading: false,
  albums: null,
  album: null,
  error: null,
};

const searchAlbumsStart = (state) => {
  const newState = {
    ...state,
    loading: true,
    albums: null,
    error: null,
  };
  return newState;
};
const searchAlbumsSuccess = (state, action) => {
  const newState = {
    ...state,
    loading: false,
    albums: action.albums,
    error: null,
  };
  return newState;
};

const searchAlbumsFail = (state, action) => {
  const newState = {
    ...state,
    loading: false,
    albums: null,
    error: action.error,
  };
  return newState;
};

// ================= SEARCH ALBUMS

const getAlbumByIdStart = (state) => {
  const newState = {
    ...state,
    loading: true,
    album: null,
    error: null,
  };
  return newState;
};
const getAlbumByIdSuccess = (state, action) => {
  const newState = {
    ...state,
    loading: false,
    album: action.album,
    error: null,
  };
  return newState;
};

const getAlbumByIdFail = (state, action) => {
  const newState = {
    ...state,
    loading: false,
    album: null,
    error: action.error,
  };
  return newState;
};

// ================= GET ALBUM BY ID

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_ALBUMS_START:
      return searchAlbumsStart(state);
    case actionTypes.SEARCH_ALBUMS_SUCCESS:
      return searchAlbumsSuccess(state, action);
    case actionTypes.SEARCH_ALBUMS_FAIL:
      return searchAlbumsFail(state, action);

    case actionTypes.GET_ALBUM_BY_ID_START:
      return getAlbumByIdStart(state);
    case actionTypes.GET_ALBUM_BY_ID_SUCCESS:
      return getAlbumByIdSuccess(state, action);
    case actionTypes.GET_ALBUM_BY_ID_FAIL:
      return getAlbumByIdFail(state, action);

    default:
      return state;
  }
};
