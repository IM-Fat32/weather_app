import React, { useState } from 'react';
import "./LocationBar.css";

import { Icon } from '@iconify/react';
import bxSearch from '@iconify-icons/bx/bx-search';

const LocationBar = ({ callback }) => {
  const [inputValue, setInputValue] = useState();
  const handleChangeInput = () => {
    const inputValue = document.querySelector("[data-input]").value;
    setInputValue(inputValue);
  }

  const handleClickSearch = () => {
    callback(inputValue);
  }

  return (
    <div className="locationBar-wrapper">
      <div className="locationBar">
        <input type="text" data-input onChange={handleChangeInput} />
        <button onClick={handleClickSearch}><Icon icon={bxSearch} /></button>
      </div>
    </div>
  );
}

export default LocationBar;