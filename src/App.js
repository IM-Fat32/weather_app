import './App.css';
//import npm components, elements
import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//
import {APIKey} from "./APIKey.js"; //external file with API key
//import Components
import Navbar from "./Components/Navbar/Navbar.jsx";
import LocationBar from "./Components/LocationBar/LocationBar.jsx";
import LangButton from "./Components/LangButton/LangButton.jsx";
//

function App() {
  const [city, setCity] = useState("London");//local state handleBarInput
  const [dataAPI, setDataAPI] = useState(); //local state fetch data from API
  const currentLang = useSelector(store => store.lang)//global state language
  //get data from API
  const asyncGetData = async (city, currentLang, APIKey) => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&lang=${currentLang}`;
    //call API
    fetch(API).then((res) => res.json()).then((res) => {
      setDataAPI(res);
    })
  }
  //

  //before loaded page, start calling API
  useEffect (()=>{
    asyncGetData(city, currentLang, APIKey);
  },[city,currentLang]);  //every change global state, re-render + call API
  //
  
  console.log(dataAPI)
  return (
      <Router>
      <div className="App" >
          <Navbar />
          <LangButton />
          {dataAPI ? <h2>{dataAPI.coord.lon}</h2>: <h2>Oczekwianie na dane</h2>}
          <LocationBar callback={setCity}/>
          <Switch>
            <Route path="/">
            </Route>
          </Switch>
      </div>
      </Router>
  );
}

export default App;
