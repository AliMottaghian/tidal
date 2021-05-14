import { fork, all } from "redux-saga/effects";

import { watchSearch } from "./api/search/saga";
import { watchAlbums } from "./api/albums/saga";

export default function* rootSaga() {
  yield all([fork(watchSearch), fork(watchAlbums)]);
}
