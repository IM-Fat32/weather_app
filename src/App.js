import './App.css';
import React, {useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [lang, setLang] = useState(true);


  return (
    <Router>
    <div className="App">
        {/* Maain menu */}
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
