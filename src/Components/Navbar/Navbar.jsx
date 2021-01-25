import React, { useState } from 'react';

import "./Navbar.css"; //import local styles

const Navbar = () => {
  //active menu
  const [isActive, setIsActive] = useState(false);

  const handleActiveMenu = () => {
    console.log(isActive)
    setIsActive((prevState) => !prevState);

  }

  return (
    <div className="navbar" style={isActive ? { transform: `translateX(${0}px)` } : { transform: `translateX(${-200}px)` }} >
      <div className="activator" onClick={handleActiveMenu}></div>
    </div >
  );
}


export default Navbar;