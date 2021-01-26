import {CHANGE_LANG} from "../actions/langActions.js";

export const langReducer = (state = "en", action) => {
  if(action.type === CHANGE_LANG) {
    state = action.payload;
  }
  return state;
}