import "./home.scss";

import React from "react";
import Weather from "../weatherfetch/weather";
import { Container, Row, Col,} from 'reactstrap';



const Home = () => {
    return (  
        
            <Container className="body">
      <Row>
        <Col>Johnny Go Find</Col>
      </Row>
      
      <Row className="cards">
        <Col xs={{ size: '3', offset: 1 }}> <Weather /></Col>
        <Col xs={{ size: '3', offset: 1 }}> <Weather /></Col>
        <Col xs={{ size: '3', offset: 1 }}> <Weather /></Col>
      </Row>
      
    </Container>
           
          
        
    );
}
 
export default Home;