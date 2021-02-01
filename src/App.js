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
import MainPage from './pages/MainPage/MainPage.jsx';
//

function App() {
  const [city, setCity] = useState("London");//local state handleBarInput
  const [dataAPI, setDataAPI] = useState(); //local state fetch data from API
  const currentLang = useSelector(store => store.lang)//global state language
  //get data from API
  const asyncGetData = async (city, currentLang, APIKey) => {
    const API = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&appid=${APIKey}&lang=${currentLang}`;
    fetch(API).then((res) => res.json()).then((res) => {
      if(res.cod === "200")
        setDataAPI(res);
      else
        setDataAPI(null);
    })
  }
  console.log(dataAPI)
  //

  //before loaded page, start calling API
  useEffect (()=>{
    asyncGetData(city, currentLang, APIKey);
  },[city,currentLang]);  //every change global state, re-render + call API
  //
  return (
      <Router>
      <div className="App" >
          <Navbar />
          <LangButton />
          <LocationBar callback={setCity}/>
          <Switch>
            <Route path="/">
              {
              dataAPI ? 
                <MainPage data = {dataAPI}/> 
                : 
                <h3 className="error">Niepoprawne miasto</h3>
              }
            </Route>
          </Switch>
      </div>
      </Router>
  );
}

export default App;
