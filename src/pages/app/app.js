import "./App.scss";

import React from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';



import Nasa from "./nasaFetch/Nasa";
import Coordinates from "./nasaFetch/Coordinates";
import Weather from "../weatherfetch/weather";



import './App.scss';

function App() {
  return (
    <BrowserRouter>

      <div>
          
          <Route component={ Nasa } path="/nasa" exact />
          <Route component={ Coordinates} path="/coordinates" />
          <Route component={ Weather } path="/weather" />
      </div>

      
    </BrowserRouter>
   

  );
}

export default App;
