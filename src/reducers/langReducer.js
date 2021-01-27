import {CHANGE_LANG} from "../actions/langActions.js";

export const langReducer = (state = "en", action) => {
  if(action.type === CHANGE_LANG) {
    let currentLang = action.payload.lang;
    if(currentLang === "pl")
      currentLang = "en"
    else
      currentLang = "pl"
    state =currentLang ;
  }
  return state;
}