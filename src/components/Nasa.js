import React from "react";
import NavBar from "./NavBar"; 
// import Coordinates from "./Coordinates";

// function latLong(lat, long) {
//   const nasa_url = 'https://api.nasa.gov/planetary/earth/imagery'
//   const long = `lon=${crd.longitude}`
//   const lat = `lat=${crd.latitude}`;
//   const date = "date=2013-05-01"
//   const apiKey = process.env.REACT_APP_NASA_KEY;
//   const baseUrl = `${nasa_url}?${lat}&${long}&dim=.18&${date}&api_key=${apiKey}`
//   console.log(baseUrl);
// }

const  Nasa = (props) => {
    
  return (
    <>
      <NavBar />
      <div>
        <h1>NASA IMAGE</h1>
       
      </div>
    </>
  );
}
export default Nasa;
