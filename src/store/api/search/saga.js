import { put, takeEvery } from "redux-saga/effects";
import { GET } from "../api";
import * as actions from "./action";
import * as actionTypes from "./actionTypes";

export function* searchArtistsSaga(action) {
  yield put(actions.searchArtistsStart());
  let response = null;
  if ((!action.value, action.next)) {
    response = yield GET(action.next);
  } else {
    response = yield GET(`search/artist?q=${action.value}`);
  }
  if (!response.status || response.status >= 400) {
    yield put(actions.searchArtistsFail(response));
  } else {
    yield put(actions.searchArtistsSuccess(response));
  }
}

export function* watchSearch() {
  yield takeEvery(actionTypes.SEARCH_ARTISTS, searchArtistsSaga);
}
