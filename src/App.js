import './App.css';
import React, {useEffect} from 'react';
import  {useSelector} from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



//import components
import Navbar from "./Components/Navbar/Navbar.jsx";
import LocationBar from "./Components/LocationBar/LocationBar.jsx";
import LangButton from "./Components/LangButton/LangButton.jsx";

function App() {
  
  const lang = useSelector(store => store.lang);
  console.log(lang)
  return (
      <Router>
      <div className="App">
          <Navbar />
          <LangButton name="Pl"/>
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
