import "./App.scss";

import React from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';


import Home from "../home/Home";
import Weather from "../weatherfetch/weather";




import './App.scss';

function App() {
  return (
    <BrowserRouter>

      <div>
          <Route component={ Home } path="/" exact />
          <Route component={ Weather } path="/weather" />
      </div>

      
    </BrowserRouter>
   

  );
}

export default App;
