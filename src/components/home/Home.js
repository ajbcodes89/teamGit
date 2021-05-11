import "./home.scss";

import React from "react";
import Weather from "../weatherfetch/weather";
import Nasa from "../nasaFetch/Nasa";
import Yelp from "../yelpFetch/Yelp";


import { Container, Row, Col, Button} from 'reactstrap';



const Home = () => {

    return (  
        
            <Container className="body">
              
      <Row>
        <Col className="title">Johnny Go Find</Col>
      </Row>

      <Row className="geoButtonPosition">
        <Button color="primary" size="lg" className="geoButton">Your Location</Button>{''}
       </Row>
         
      
      <Row className="cards">
        <Col xs={{ size: '3', offset: 1 }}> <Weather /></Col>
        <Col xs={{ size: '3', offset: 1 }}> <Nasa /></Col>
        <Col xs={{ size: '3', offset: 1 }}> <Yelp /></Col>
      </Row>
      
    </Container>
           
          
        
    );
}
 
export default Home;