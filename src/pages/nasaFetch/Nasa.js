import "./nasa.scss";

import React, { useState } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle,
  } from 'reactstrap';

const lat = "39.95559";
const lon = "-86.01387";

const Nasa = () => {
    let url =`https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2018-01-01&dim=0.15&api_key=s1f5c6B887EnA8g0kAwnrKyWJUP8Jg4tOLiHDSAw`;

    return (
        <div className ="nasa">
             <Card className="nasaContainer">
        
        <CardBody>
          <CardTitle tag="h5">Your Location:</CardTitle>
          <CardImg top width="100%" src={url} alt="Card image cap" />
        </CardBody>
      </Card>
            </div>
    );
};

export default Nasa;