import { all, put, takeEvery } from "redux-saga/effects";
import { GET } from "../api";
import * as actions from "./action";
import * as actionTypes from "./actionTypes";

export function* searchAlbumsSaga(action) {
  yield put(actions.searchAlbumsStart());
  const response = yield GET(`artist/${action.artistId}/albums`);
  if (!response.status || response.status >= 400) {
    yield put(actions.searchAlbumsFail(response));
  } else {
    yield put(actions.searchAlbumsSuccess(response));
  }
}

export function* getAlbumByIdSaga(action) {
  yield put(actions.getAlbumByIdStart());
  const response = yield GET(`album/${action.albumId}`);
  if (!response.status || response.status >= 400) {
    yield put(actions.getAlbumByIdFail(response));
  } else {
    yield put(actions.getAlbumByIdSuccess(response));
  }
}

export function* watchAlbums() {
  yield all([
    takeEvery(actionTypes.SEARCH_ALBUMS, searchAlbumsSaga),
    takeEvery(actionTypes.GET_ALBUM_BY_ID, getAlbumByIdSaga),
  ]);
}
