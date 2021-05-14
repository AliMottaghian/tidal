import { combineReducers } from "redux";
import configureStore from "./createStore";

import { searchReducer } from "./api/search/reducer";
import { albumsReducer } from "./api/albums/reducer";

export const reducers = combineReducers({
  search: searchReducer,
  albums: albumsReducer,
});
const config = () => {
  return configureStore(reducers);
};
export default config;
