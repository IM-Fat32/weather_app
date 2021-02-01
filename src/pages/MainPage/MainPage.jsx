import React, { useState } from 'react';
import outlineNavigateNext from '@iconify-icons/ic/outline-navigate-next';
import { Icon, InlineIcon } from '@iconify/react';

import "./MainPage.css";

const MainPage = ({ data }) => { //receve data from props app.js
  const [numRightElement, setNumRightElement] = useState(2);

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


  const getThreeElements = (arr) => {
    const showElementsArr = [];
    for (let i = numRightElement - 2; i <= numRightElement; i++)
      showElementsArr.push(arr[i]);
    return showElementsArr;
  }

  const showElementsArr = getThreeElements(elementsArray);

  const handleMinusValueNumber = () => {
    setNumRightElement(numRightElement - 1);
    console.log(numRightElement)
  }

  const handleAddValueNumber = () => {
    setNumRightElement(numRightElement + 1);
    console.log(numRightElement)
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
      <div className="subElements">
        <>
          {numRightElement >= 3 ?
            <button className="slider__button" onClick={handleMinusValueNumber}>
              <Icon icon={outlineNavigateNext} />
            </button>
            :
            null
          }
          {showElementsArr}
          {numRightElement <= elementsArray.length - 2 ?
            <button className="slider__button" id="right-slider" onClick={handleAddValueNumber}>
              <Icon icon={outlineNavigateNext} />
            </button>
            :
            null
          }
        </>
      </div>
    </>
  );
}

export default MainPage;