import "./weather.scss";

import React, { useState } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';


const Weather = (props) => {
    const lat = '39.95559';
    const lon = '-86.01387';
    const [results, setResults] = useState('');
    const [description, setDescription] = useState('');
    const [unit, setUnit] = useState('imperial');
    const [wind, setWind] = useState('');
    
    


    const fetchResults = () => {
        let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff8e85625157907ecd6b6992eba58421&units=${unit}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setResults(Math.round(data.main.temp))
                setDescription(data.weather[0].description)
                setWind(data.wind.speed)
            })
            .catch(err => console.log(err))
    };

    const toggleUnit = () => {
        unit === 'imperial' ? setUnit('metric') : setUnit('imperial');
    }

    fetchResults();

    return (
        <div className ="weather">
             <Card className="cardContainer">
        
        <CardBody>
          <CardTitle tag="h5">Your local Weather</CardTitle>
          
          <CardText>It is currently {results} degrees with {description}.Wind speed is {wind} MPH.</CardText>
          <Button onClick={toggleUnit} className="weatherButton">Click for Farenheit/Celsius</Button>
        </CardBody>
      </Card>
            </div>
    );
};

export default Weather;