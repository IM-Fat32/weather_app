import React, { useState } from 'react';

import "./Navbar.css"; //import local styles

//import icons
import { Icon } from '@iconify/react';
import calendarDay from '@iconify-icons/bi/calendar-day';
import calendarWeek from '@iconify-icons/bi/calendar-week';
import folderFilled from '@iconify-icons/ant-design/folder-filled';
import menuAlt2 from '@iconify-icons/heroicons-solid/menu-alt-2';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';

const Navbar = () => {
  //active menu
  const [isActive, setIsActive] = useState(false);

  const handleActiveMenu = () => {
    console.log(isActive)
    setIsActive((prevState) => !prevState);

  }
  return (
    <nav
      style={isActive ? { transform: `translateX(${0}px)` } : { transform: `translateX(${-200}px)` }}
    >
      <div className="activator_wrap">
        <div className="activator"
          onClick={handleActiveMenu}
          style={isActive ? { left: `70%` } : { left: `100%` }}
        >
          <Icon icon={menuAlt2} color={isActive ? "black" : "white"} />
        </div>
      </div>
      <ul>
        <li>
          <div className="icon"><Icon icon={calendarDay} /></div>
          <span>Today</span>
        </li>
        <li>
          <div className="icon"><Icon icon={calendarWeek} /></div>
          <span>Week</span>
        </li>
        <li>
          <div className="icon"><Icon icon={folderFilled} /></div>
          <span>API</span>
        </li>
      </ul>
      <ul>
        <li>
          <div className="icon"><Icon icon={githubFilled} /></div>
          <span>Github</span>
        </li>
        <li>
          <div className="icon"><Icon icon={linkedinFilled} /></div>
          <span>Linkedin</span>
        </li>
      </ul>
    </nav >
  );
}


export default Navbar;