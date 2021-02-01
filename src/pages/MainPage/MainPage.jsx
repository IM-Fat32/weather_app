import React from 'react';
import outlineNavigateNext from '@iconify-icons/ic/outline-navigate-next';
import { Icon } from '@iconify/react';

import "./MainPage.css";

const MainPage = ({ data }) => { //receve data from props app.js
  if (!data) {
    return null;
  }

  const city = data.city.name;

  data = data.list;

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
  const firstEelement = elementsArray[0];

  elementsArray.shift();

  const handleMinusValueNumber = () => {
    const container = document.querySelector(".subElements");
    let translateXValue = parseInt(window.getComputedStyle(container).getPropertyValue('transform').match(/(-?[0-9.]+)/g)[4]);

    if (translateXValue < 0) {
      translateXValue += 300;
      container.style.transform = `translateX(${translateXValue}px)`
    }

  }

  const handleAddValueNumber = () => {
    setTimeout(() => { }, 300);
    const container = document.querySelector(".subElements");
    let translateXValue = parseInt(window.getComputedStyle(container).getPropertyValue('transform').match(/(-?[0-9.]+)/g)[4]);

    if (window.innerWidth < 800) {
      if (translateXValue > -1800) {
        translateXValue -= 300;
        container.style.transform = `translateX(${translateXValue}px)`
      }
    }
    else if (window.innerWidth >= 800 && window.innerWidth < 1025) {
      if (translateXValue > -1500) {
        translateXValue -= 300;
        container.style.transform = `translateX(${translateXValue}px)`
      }
    }
    else {
      if (translateXValue > -1200) {
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
        <button className="slider__button" onClick={handleMinusValueNumber}>
          <Icon icon={outlineNavigateNext} />
        </button>
        <button className="slider__button" onClick={handleAddValueNumber}>
          <Icon icon={outlineNavigateNext} />
        </button>
      </div>
    </>
  );
}

export default MainPage;