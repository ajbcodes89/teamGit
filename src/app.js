import "./App.scss";

import React, {useState, useEffect} from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';


import Home from "./components/home/Home";
import Weather from "./components/weatherfetch/weather";
import Nasa from "./components/nasaFetch/Nasa";
// import Yelp from "./components/yelpFetch/Yelp";


function App() {
  return (
    <BrowserRouter>

      <div>
          <Route component={ Home } path="/" exact />
          <Route component={ Weather } path="/weather" />
          <Route component={ Nasa } path="/Nasa" />
          {/* <Route component={ Yelp } path="/Yelp" /> */}
      </div>

      
    </BrowserRouter>
   

  );
}

export default App;
