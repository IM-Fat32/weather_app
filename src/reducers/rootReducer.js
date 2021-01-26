import {combineReducers} from "redux";

import {langReducer} from "./langReducer.js";

export const rootReducer = combineReducers({
  lang: langReducer,
});