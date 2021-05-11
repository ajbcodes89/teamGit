import React, { useState } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  
  const apiKey = process.env.REACT_APP_NASA_KEY;
  const baseUrl = `https://api.nasa.gov/planetary/earth/imagery?lat=${lat}&lon=${lng}&dim=.18&date=2013-05-01&api_key=${apiKey}`;
  console.log(baseUrl);
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  return (

    
      <div>
      <Card>
        <CardImg top width="100%" src={baseUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Coordinates</CardSubtitle>
          <CardText>{status}</CardText>
          <CardText>{lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}</CardText>
          <Button onClick={getLocation}>Get Location </Button>
        </CardBody>
      </Card>
    </div>
  );
};
    
 
export default App;
   