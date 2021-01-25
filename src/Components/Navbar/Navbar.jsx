import React, { useState } from 'react';

import "./Navbar.css"; //import local styles

//import icons
import { Icon } from '@iconify/react';
import calendarDay from '@iconify-icons/bi/calendar-day';
import calendarWeek from '@iconify-icons/bi/calendar-week';
import api1 from '@iconify-icons/carbon/api-1';

const Navbar = () => {
  //active menu
  const [isActive, setIsActive] = useState(false);

  const handleActiveMenu = () => {
    console.log(isActive)
    setIsActive((prevState) => !prevState);

  }

  return (
    <nav style={isActive ? { transform: `translateX(${0}px)` } : { transform: `translateX(${-250}px)` }} >
      <ul>
        <div className="activator" onClick={handleActiveMenu}>

        </div>
        <li>
          <div className="icon"><Icon icon={calendarDay} /></div>
          <span>Today</span>
        </li>
        <li>
          <div className="icon"><Icon icon={calendarWeek} /></div>
          <span>Week</span>
        </li>
        <li>
          <div className="icon"><Icon icon={api1} /></div>
          <span>API</span>
        </li>
      </ul>
      <div className="media">

      </div>
    </nav >
  );
}


export default Navbar;