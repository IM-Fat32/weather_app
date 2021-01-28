import React from 'react';

import "./MainPage.css";

const MainPage = ({ data }) => {

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

  const subArray = elementsArray;
  subArray.shift();


  return (
    <>
      <div className="mainElement">
        {data ?
          <>
            {elementsArray[0]}
          </>
          :
          <h4>Brak danych</h4>
        }
      </div>
      <div className="subElements">
        {subArray}
      </div>
    </>
  );
}

export default MainPage;