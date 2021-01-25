import './App.css';
import React, {useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import components
import Navbar from "./Components/Navbar.jsx";

function App() {
  const [lang, setLang] = useState(true); //language state

  return (
    <Router>
    <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/">
            <p>Hello</p>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
