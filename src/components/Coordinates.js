import React, { useState } from "react";
import { Button } from 'reactstrap';



var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function success(pos) {
  var crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  console.log(pos);

/**************  NASA URL ***********/



const nasa_url = 'https://api.nasa.gov/planetary/earth/imagery'
const long = `lon=${crd.longitude}`
const lat = `lat=${crd.latitude}`;
const date = "date=2013-05-01"
const apiKey = process.env.REACT_APP_NASA_KEY;
const baseUrl = `${nasa_url}?${lat}&${long}&dim=.18&${date}&api_key=${apiKey}`
console.log(baseUrl);
}

/************************************/

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
export default class GeoLocation extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          console.log(result.state);
          //If granted then you can directly call your function here
          navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }
        result.onchange = function () {
          console.log(result.state);
        };
      });
    } else {
      alert("Sorry Not available!");
    }
  }

  render() {
    return(
     <div className="geolocation">
     <Button color="primary" size="lg" className="geoButton" >Your Location</Button>{' '}
     </div>
        
          
        
  
      );
    };
}

