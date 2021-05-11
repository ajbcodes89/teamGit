import React, { Link, useState } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

//const axios = require("axios")

const apiKey = 'Bearer BZbTJ0ATC14wIzHdy2my2o8yPAC4j4ciw6GfXBy3-mLQGXciiOUBWH4IlhPkXHxv-EgCZfbxteZ6g8alJrR0nTYvWw3eZeUOlJvPVTS5xgGilSWbwiYc6yInn--WYHYx';
const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=restaurants&limit=10'
//fetch here, returns html, pending success

const lati = 40.0162816;
const longi = -85.999616;


const Yelp = () => {

        const[diners, setDiners] = useState('');
        const builtURL = `${baseURL}&latitude=${lati}&longitude=${longi}`;

    //console.log('hey the button works');


    fetch(builtURL, {
        method: 'GET',
        headers: new Headers( {
            "Authorization": apiKey,
            "Content-Type": 'application/json'
        })
    })
        .then(result => result.json())
        .then(json => {
            
            console.log(json);
                json.businesses.map( (bus) => {
                   <li><Link to={bus.url}>{bus.name}</Link></li>
                })
                
                
        })

    
        return (

        <div className="main">
            <div className="mainDiv">
                <div className="yelp-card">
                    <Card>
                        {/* <CardImg top width="100%" src="#" alt="Card image cap" /> */}
                        <CardBody>
                            <CardTitle tag="h5">Nearby Restaurants</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Check Your Fridge</CardSubtitle>
                            <CardText>
                        {/* Learn to Cook{json.businesses.name} */}
                            </CardText>
                            {/* <Button onClick={toggleUnit}>Click for Farenheit/Celsius</Button> */}
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
};


export default Yelp; 