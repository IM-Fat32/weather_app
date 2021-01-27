import React, { useState } from 'react';
import "./LocationBar.css";

import { Icon } from '@iconify/react';
import bxSearch from '@iconify-icons/bx/bx-search';

const LocationBar = () => {
  const [inputValue, setInputValue] = useState();

  const handleChangeInput = () => {

  }

  console.log(inputValue);
  return (
    <div className="locationBar-wrapper">
      <div className="locationBar">
        <input type="text" />
        <button><Icon icon={bxSearch} /></button>
      </div>
    </div>
  );
}

export default LocationBar;