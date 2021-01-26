import './App.css';
import React, {useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import components
import Navbar from "./Components/Navbar/Navbar.jsx";
import LocationBar from "./Components/LocationBar/LocationBar.jsx";

function App() {
  const [lang, setLang] = useState(true); //language state

  return (
    <Router>
    <div className="App">
        <Navbar/>
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
