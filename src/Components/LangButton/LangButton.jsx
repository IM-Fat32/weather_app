import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./LangButton.css";
import { changeLang } from "../../actions/langActions.js";

const LangButton = () => {
  const currentLang = useSelector(store => store.lang);
  const dispatch = useDispatch();

  const handleClickLangButton = () => {
    dispatch(changeLang(currentLang));
  }
  return (
    <button className="lang_button" onClick={() => handleClickLangButton()}>
      {currentLang === "pl" ? "en" : "pl"}
    </button>
  );
}

export default LangButton;
