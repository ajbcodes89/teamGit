import "./App.scss";

import React, {useState, useEffect} from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';


import Home from "./components/home/Home";
import Weather from "./components/weatherfetch/weather";
import Location from "./components/location/Location";



function App() {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  },[])





  return (
    <BrowserRouter>

      <div>
         
          <Route component={ Home } path="/" exact />
          <Route component={ Weather } path="/weather" />
          <Route component={ Location } path="/location" />
      </div>

      
    </BrowserRouter>
   

  );
}

export default App;
