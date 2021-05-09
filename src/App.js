import React from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home";
import Nasa from "./components/Nasa";
import Coordinates from "./components/Coordinates";


import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div>
          <Route component={ Home } path="/" exact />
          <Route component={ Nasa } path="/nasa" exact />
          <Route component={ Coordinates} path="/coordinates" />
      </div>
      
    </BrowserRouter>
   

  );
}

export default App;
