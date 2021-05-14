import * as actionTypes from "./actionTypes";

export const searchAlbums = (artistId) => {
  return {
    type: actionTypes.SEARCH_ALBUMS,
    artistId: artistId,
  };
};

export const searchAlbumsStart = () => {
  return {
    type: actionTypes.SEARCH_ALBUMS_START,
  };
};

export const searchAlbumsSuccess = (albums) => {
  return {
    type: actionTypes.SEARCH_ALBUMS_SUCCESS,
    albums: albums,
  };
};

export const searchAlbumsFail = (error) => {
  return {
    type: actionTypes.SEARCH_ALBUMS_FAIL,
    error: error,
  };
};

// ============ SEARCH ALBUMS

export const getAlbumById = (albumId) => {
  return {
    type: actionTypes.GET_ALBUM_BY_ID,
    albumId: albumId,
  };
};

export const getAlbumByIdStart = () => {
  return {
    type: actionTypes.GET_ALBUM_BY_ID_START,
  };
};

export const getAlbumByIdSuccess = (album) => {
  return {
    type: actionTypes.GET_ALBUM_BY_ID_SUCCESS,
    album: album,
  };
};

export const getAlbumByIdFail = (error) => {
  return {
    type: actionTypes.GET_ALBUM_BY_ID_FAIL,
    error: error,
  };
};
