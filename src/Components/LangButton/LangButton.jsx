import React from 'react';
import "./LangButton.css";

const LangButton = (props) => {
  const handleClickLangButton = (props) => {

  }

  const name = props.name;
  const setLang = props.fun;
  return (
    <button className="lang_button" onClick={() => handleClickLangButton(setLang)}>
      {name}
    </button>
  );
}

export default LangButton;
