import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row, Col} from 'react-bootstrap';
import './module.css';
import './Salemhospital.js';
import'./Salemres.js';
import'./Salemschool.js';
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
function Map_salem()
{
    return(
        <div className="main">
            <Container fluid>
                <Row>
                    <Col  md={6}><img className="img"  height='650px'width='250px'  src={require('./salem_map.jpg')}/></Col>
                    <Col md={6}><h1 className="heading"><b>Overview</b></h1>
                    <h3 className="adjustm">Salem District is one of the 38 districts of Tamil Nadu state in southern India. The district is now divided into Dharmapuri, Krishnagiri, Namakkal as individual districts. Salem is the district headquarters and other major towns in the district include Mettur, Thammampatti, Attur, Omalur, Sankagiri and Edappadi. That Salem dates to at least two thousand years ago is evident from the discovery of silver coins from the Roman Emperor Nero Claudius Caesar Augustus Germanicus (37–68 CE) found by Koneripatti of Salem in 1987. It was ruled by Mazhavar King Kolli Mazhavan and kings Adhiyaman and Valvil Ori of Sangam age. It is part of Mazhanadu, a vast region that dates to the 2nd century BCE. Salem was the largest district of Tamil Nadu. It was bifurcated into Salem and Dharmapuri districts in 1965 and Namakkal district in 1997. Now Salem has been developed a lot by building many bridges and is considered to be the smart city. Salem is famous for cultivating mangoes.                </h3>
                    </Col>
                </Row>
                <br></br>
                <div className="new">
                <h1 >Go By Category</h1>
                </div>
                <br></br>
                <div className="hove">
                <Row>
                    <Col className="rest1" md={4}><a href="\salem\hospital"><img src={require('./hos.png')} width={310} height={310}></img></a><h2 className="displaymap5" >Hospitals</h2></Col>
                    <Col className="rest1" md={4}><a href="\salem\restaurants"><img src={require('./res.png')} width={310} height={310}></img></a><h2 className="displaymap2">Restaurants</h2></Col>
                    <Col className="rest1" md={4}><a href="\salem\schools"><img src={require('./school.png')} width={310} height={310}></img></a><h2 className="displaymap5">Schools</h2></Col>
                </Row>
                <br></br>
                <Row>
                <Col className="rest1" md={4}><a href="\salem\colleges"><img src={require('./colleges.png')} width={310} height={310}></img></a><h2 className="displaymap">Colleges</h2></Col>
                    <Col className="rest1" md={4}><a href="\salem\tourist"><img src={require('./tourist.png')} width={310} height={310}></img></a><h2 className="displaymap3">Tourist Places</h2></Col>
                    <Col className="rest1" md={4}><a href="\salem\hotels"><img src={require('./room.png')} width={310} height={310}></img></a><h2 className="displaymap5">Hotels</h2></Col>
                </Row>
                <br></br>
                <Row>
                <Col className="rest1" md={4}><a href="\salem\shops"><img src={require('./shopping.jpg')} width={320} height={320}></img></a><h2 className="displaymap5">Shopping</h2></Col>
                    <Col className="rest1" md={4}><a href="\salem\functionhall"><img src={require('./functionhall.png')} width={320} height={320}></img></a><h2 className="displaymap4">Function Halls</h2></Col>
                    <Col className="rest1" md={4}><a href="\salem\theatre"><img src={require('./cinema.png')} width={310} height={310}></img></a><h2 className="displaymap5">Theatres</h2></Col>

                </Row>
                <br></br>
                
                </div>
                <br></br>
                
            </Container>
            
        </div>

    );
}
export default Map_salem;