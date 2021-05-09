import React, { useState } from 'react';

const apiKey = process.env.REACT_APP_WEATHER_KEY;

const Weather = () => {
    const [results, setResults] = useState('');
    const [description, setDescription] = useState('');
    const [unit, setUnit] = useState('imperial');

    const fetchResults = () => {
        let url =`https://api.openweathermap.org/data/2.5/weather?lat=41.0748313&lon=-85.3032709&appid=${apiKey}&units=${unit}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setResults(Math.round(data.main.temp))
                setDescription(data.weather[0].description)
            })
            .catch(err => console.log(err))
    };

    const toggleUnit = () => {
        unit === 'imperial' ? setUnit('metric') : setUnit('imperial');
    }

    fetchResults();

    return (
        <div className ="weather">
            <div>
                <h1>Your local Weather</h1>
                <p> It is currently {results} degrees with {description}.</p>
                <button onClick={toggleUnit}>Click for Farenheit/Celsius</button>
            </div>
            </div>
    );
};

export default Weather;