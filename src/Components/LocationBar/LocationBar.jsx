import React, { useState } from 'react';
import "./LocationBar.css";

import { Icon } from '@iconify/react';
import bxSearch from '@iconify-icons/bx/bx-search';

const LocationBar = ({ callback }) => {
  const [inputValue, setInputValue] = useState("London");
  const handleChangeInput = () => {
    const inputValue = document.querySelector("[data-input]").value;
    setInputValue(inputValue);
  }

  const handleClickSearch = () => {
    if (inputValue !== "") {
      callback(inputValue);
      setInputValue("");
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13)
      handleClickSearch();
  }

  return (
    <div className="locationBar-wrapper">
      <div className="locationBar">
        <input type="text" data-input onChange={handleChangeInput} onKeyDown={handleKeyPress} value={inputValue} />
        <button onClick={handleClickSearch}><Icon icon={bxSearch} /></button>
      </div>
    </div>
  );
}

export default LocationBar;