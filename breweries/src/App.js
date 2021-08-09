import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import Brewery from './Pages/Brewery';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/brewery/:id" component={Brewery} />
    </Router>
  );
}

export default App;
