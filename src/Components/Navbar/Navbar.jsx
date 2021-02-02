import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { capitaliseFirstLetter } from "../../capitaliseFirstLetter.js";

import "./Navbar.css"; //import local styles

//import icons
import { Icon } from '@iconify/react';
import calendarDay from '@iconify-icons/bi/calendar-day';
import calendarWeek from '@iconify-icons/bi/calendar-week';
import folderFilled from '@iconify-icons/ant-design/folder-filled';
import menuAlt2 from '@iconify-icons/heroicons-solid/menu-alt-2';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';

import dictionary from "../../dictionary.js"

const Navbar = () => {
  const currentLang = useSelector(store => store.lang) //get global lang varraible
  //active menu
  let currentDictionary;
  if (currentLang === "pl") {
    currentDictionary = dictionary.pl;
  }
  else {
    currentDictionary = dictionary.en;
  }

  const [isActive, setIsActive] = useState(false);

  const handleActiveMenu = () => {
    setIsActive((prevState) => !prevState);
  }
  return (
    <nav
      style={isActive ? { transform: `translateX(${0}px)` } : { transform: `translateX(${-250}px)` }}
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
        <NavLink to="/" className="list-el">
          <div className="icon"><Icon icon={calendarDay} /></div>
          <span>{capitaliseFirstLetter(currentDictionary.weather)}</span>
        </NavLink>
        <NavLink to="/week" className="list-el">
          <div className="icon"><Icon icon={calendarWeek} /></div>
          <span>{capitaliseFirstLetter(currentDictionary.clouds)}</span>
        </NavLink>
        <NavLink to="/week" className="list-el">
          <div className="icon"><Icon icon={calendarWeek} /></div>
          <span>{capitaliseFirstLetter(currentDictionary.windSpeed)}</span>
        </NavLink>
        <a href="https://openweathermap.org">
          <li>
            <div className="icon"><Icon icon={folderFilled} /></div>
            <span>API</span>
          </li>
        </a>
      </ul>
      <ul>
        <a href="https://openweathermap.org">
          <li>
            <div className="icon"><Icon icon={githubFilled} /></div>
            <span>Github</span>
          </li>
        </a>
        <a href="https://openweathermap.org">
          <li>
            <div className="icon"><Icon icon={linkedinFilled} /></div>
            <span>Linkedin</span>
          </li>
        </a>
      </ul>
    </nav >
  );
}


export default Navbar;