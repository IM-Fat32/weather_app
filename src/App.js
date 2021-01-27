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
  const City = "London"; //local state handleBarInput
  const [dataAPI, setDataAPI] = useState(); //local state fetch data from API
  const currentLang = useSelector(store => store.lang)//global state language

  //get data from API
  const asyncGetData = async (City, currentLang, APIKey, data) => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${APIKey}&lang=${currentLang}`;
    //call API
    fetch(API).then((res) => res.json()).then((res) => {
      setDataAPI(res);
    })
  }
  //

  //before loaded page, start calling API
  useEffect (()=>{
    asyncGetData(City, currentLang, APIKey);
  },[currentLang]);   //every change global state, re-render + call API
  //
  return (
      <Router>
      <div className="App">
          <Navbar />
          <LangButton />
          <LocationBar/>
          <Switch>
            <Route path="/">
            </Route>
          </Switch>
      </div>
      </Router>
  );
}

export default App;
