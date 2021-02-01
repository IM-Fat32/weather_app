import React from 'react';
import outlineNavigateNext from '@iconify-icons/ic/outline-navigate-next';
import { Icon } from '@iconify/react';

import "./MainPage.css";

const MainPage = ({ data }) => { //receve data from props app.js
  if (!data) { //check if data are null
    return null;
  }

  const city = data.city.name; // assign city from recevied data to variable

  data = data.list; //more accurate data data.list contains weather data 

  //list of elements with ready html structure
  const elementsArray = data.map((el) => {
    const temp = el.main.temp - 273.15;
    const image = require(`../../icons/${el.weather[0].icon}@2x.png`);

    let currentDate = el.dt_txt
    currentDate = currentDate.slice(0, -3);

    return (
      < div className="display" key={data.id} >
        <h3 className="location">{city}</h3>
        <h3 className="temp">{`${temp.toFixed()} °C`}</h3>
        <img src={image.default} alt="Weather icon" />
        <div className="description">{el.weather[0].description}</div>
        <p>{currentDate}</p>
      </div >
    )
  });
  //

  const firstEelement = elementsArray[0]; //current weather

  elementsArray.shift(); //deleting current weather from an array

  //slider buttons, left and right element behavior
  const handleSliderLeft = () => {
    const container = document.querySelector(".subElements");

    let translateXValue = parseInt(window
      .getComputedStyle(container) //get computed styles from element (argument)
      .getPropertyValue('transform') //getting property transform as matrix tuple 
      .match(/(-?[0-9.]+)/g)[4]); //changing tuple to string, [index 4 == translateX property]


    if (translateXValue < 0) {
      translateXValue += 300;
      container.style.transform = `translateX(${translateXValue}px)`
    }

  }

  const handleSliderRight = () => {
    setTimeout(() => { }, 300);
    const container = document.querySelector(".subElements");
    let translateXValue = parseInt(window.getComputedStyle(container).getPropertyValue('transform').match(/(-?[0-9.]+)/g)[4]);

    if (window.innerWidth < 800) { //max widnow width 799px
      if (translateXValue > -1800) { //6 elements 300px width because main load page = 1 element to show
        translateXValue -= 300;
        container.style.transform = `translateX(${translateXValue}px)`
      }
    }
    else if (window.innerWidth >= 800 && window.innerWidth < 1025) { // window width between 800px and 1024px
      if (translateXValue > -1500) { //5 elements 300 px because main load page = 2 elements to show
        translateXValue -= 300;
        container.style.transform = `translateX(${translateXValue}px)`
      }
    }
    else {
      if (translateXValue > -1200) { //4 elements 300px width because main load page = 3 elements to show
        translateXValue -= 300;
        container.style.transform = `translateX(${translateXValue}px)`
      }
    }
  }

  return (
    <>
      <div className="mainElement">
        {data ?
          <>
            {firstEelement}
          </>
          :
          <h4>Brak danych</h4>
        }
      </div>
      <div className="subElements__wrapper">
        <div className="subElements">
          {elementsArray}
        </div>
        <button className="slider__button" onClick={handleSliderLeft}>
          <Icon icon={outlineNavigateNext} />
        </button>
        <button className="slider__button" onClick={handleSliderRight}>
          <Icon icon={outlineNavigateNext} />
        </button>
      </div>
    </>
  );
}

export default MainPage;