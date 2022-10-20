import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row, Col} from 'react-bootstrap';
import './module.css';
import './Chennaihospital.js';
import * as Icon from 'react-bootstrap-icons';
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
function Map()
{
    return(
        <div className="main">
            <Container fluid>
                <Row>
                    <Col  md={6}><img className="img"  height='auto'  src={require('./chennaimap.jpg')}/></Col>
                    <Col md={6}><h1 className="heading"><b>Overview</b></h1>
                    <h3 className="adjustm">Chennai also known as Madras[A] (the official name until 1996), is the capital city of the Indian state of Tamil Nadu. The state's largest city in area and population as well, Chennai is located on the Coromandel Coast of the Bay of Bengal, and is the most prominent cultural, economic and educational centre of South India.
                    According to the 2011 Indian census, Chennai is the sixth-most populous city in the country and forms the fourth-most populous urban agglomeration. The Greater Chennai Corporation is the civic body responsible for the city; it is the oldest city corporation of India, established in 1688—the second oldest in the world after London. The city of Chennai is coterminous with Chennai district, which together with the adjoining suburbs constitutes the Chennai Metropolitan Area, the 36th-largest urban area in the world by population and one of the largest metropolitan economies of India.
                    Chennai is ranked as a beta-level city in the Global Cities Index, and was ranked the best city in India by India Today in the 2014 annual Indian city survey. In 2015 Chennai was named the "hottest" city (city worth visiting and worth living in for long term) by the BBC, citing the mixture of both modern and traditional values. National Geographic mentioned Chennai as the only South Asian city to feature in its 2015 "Top 10 food cities" list. Chennai was also named the ninth-best cosmopolitan city in the world by Lonely Planet. In October 2017, Chennai was added to the UNESCO Creative Cities Network (UCCN) list for its rich musical tradition. More than one-third of India's automobile industry is based in the city. Home to the Tamil film industry, Chennai is also known as a major film production centre. It is one of the 100 Indian cities to be developed as a smart city under the Smart Cities Mission.
                </h3>
                    </Col>
                </Row>
                <br></br>
                <div className="new">
                <h1 >Go By Category</h1>
                </div>
                <br></br>
                <div className="hove">
                <Row>
                    <Col className="rest1" md={4}><a href="http://localhost:3000/chennai/hospitals"><img src={require('./hos.png')} width={310} height={310}></img></a><h2 className="displaymap" >Hospitals</h2></Col>
                    <Col className="rest1" md={4}><a href="/chennai/restaurants"><img src={require('./res.png')} width={310} height={310}></img></a><h2 className="displaymap2">Restaurants</h2></Col>
                    <Col className="rest1" md={4}><a href="/chennai/schools"><img src={require('./school.png')} width={310} height={310}></img></a><h2 className="displaymap">Schools</h2></Col>
                </Row>
                <br></br>
                <Row>
                <Col className="rest1" md={4}><a href="/chennai/colleges"><img src={require('./colleges.png')} width={310} height={310}></img></a><h2 className="displaymap">Colleges</h2></Col>
                    <Col className="rest1" md={4}><a href="/chennai/tourist"><img src={require('./tourist.png')} width={310} height={310}></img></a><h2 className="displaymap3">Tourist Places</h2></Col>
                    <Col className="rest1" md={4}><a href="/chennai/hotels"><img src={require('./room.png')} width={320} height={320}></img></a><h2 className="displaymap6">Hotels</h2></Col>
                    
                </Row>
                <br></br>
                <Row>
                <Col className="rest1" md={4}><a href="/chennai/shops"><img src={require('./shopping.jpg')} width={320} height={320}></img></a><h2 className="displaymap5">Shopping</h2></Col>
                    <Col className="rest1" md={4}><a href="/chennai/functionhall"><img src={require('./functionhall.png')} width={320} height={320}></img></a><h2 className="displaymap3">Function Halls</h2></Col>
                    <Col className="rest1" md={4}><a href="/chennai/theatres"><img src={require('./cinema.png')} width={310} height={310}></img></a><h2 className="displaymap5">Theatres</h2></Col>
                    
                </Row>
                <br></br>
                  </div>
                <br></br>
                
            </Container>

            <Row className="fol" justify="around">
                  <Col md={12} className="head"><h2>Follow Us For More Information</h2></Col>
                </Row>
            <footer className='ro'>
              <div>
              <a className="insta" href="https://instagram.com/_.shutter_eye._?igshid=YmMyMTA2M2Y="><Icon.Instagram  ></Icon.Instagram></a>
            
        
              <a className="face" href=""><Icon.Facebook></Icon.Facebook></a>
          
            
              <a className="link" href=""><Icon.Linkedin ></Icon.Linkedin></a>

              <a className="what" href="https://t.me/+lDs3sbk5J6tjMTI9"><Icon.Telegram ></Icon.Telegram></a>


              </div>
            </footer>
            
        </div>

    );
}
export default Map;