import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row, Col} from 'react-bootstrap';
import './module.css';

import * as Icon from 'react-bootstrap-icons';
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
function KovaiMap()
{
    return(
        <div className="main">
            <Container fluid>
                <Row>
                    <Col  md={6}><img className="img"  height='auto'  src={require('./kovaimap.jpg')}/></Col>
                    <Col md={6}><h1 className="heading"><b>Overview</b></h1>
                    <h3 className="adjustm">Coimbatore is the third largest city of the state, one of the most industrialized cities in Tamil Nadu, known as the textile capital of South India or the Manchester of the South India, the city is situated on the banks of the river Noyyal, Coimbatore existed even prior to the 2nd or 3rd century AD by Karikalan, the first of the early Cholas. Among its other great rulers were Rashtrakutas, Chalukyas, Pandyas, Hoysalas and the Vijayanagara kings. When Kongunadu fell to the British along with the rest of the state, its name was changed to Coimbatore and it is by this name that it is known today,  in  local Tamil language it is also called as Kovai.

In the rain shadow region of the Western ghats, Coimbatore enjoys a very pleasant climate all the year round, aided by the fresh breeze that flows through the 25 kms long Palakkad gap. The rich black soil of the region has contributed to Coimbatore’s flourishing agriculture industry and, it is in fact the successful growth of cotton that served as a foundation for the establishment of its famous textile industry. The first textile mill came as far back as 1888 after that many textile mills were started and provided many employment opportunities to within as well as neighboring Districts. The result has been a strong economy and a reputation as one of the greatest industrial cities in South India.

There are more than 25,000 small, medium, large scale industries and textile mills are situated. Coimbatore is also famous for  foundry and automobile industries, manufacturing of textile industry equipment’s, spares,  motor pump sets, wet grinders and varied engineering goods and services. The development of Hydro electricity from the Pykara Falls in the 1930 led to a cotton boom in Coimbatore.

Coimbatore serves as an entry and exit point to neighboring Kerala State and the very popular hill station of Udhagamandalam (Ooty) is 70 kms from Coimbatore. It is the disembarking point for those who want to take the Mountain train that runs from Mettupalayam just 35 kms away from Coimbatore, regular bus services also available daily from Coimbatore to Ooty and other districts, towns and major cities.
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
                    <Col className="rest1" md={4}><a href="/kovai/hospitals"><img src={require('./hos.png')} width={310} height={310}></img></a><h2 className="displaymap" >Hospitals</h2></Col>
                    <Col className="rest1" md={4}><a href="/kovai/restaurants"><img src={require('./res.png')} width={310} height={310}></img></a><h2 className="displaymap2">Restaurants</h2></Col>
                    <Col className="rest1" md={4}><a href="/madurai/schools"><img src={require('./school.png')} width={310} height={310}></img></a><h2 className="displaymap">Schools</h2></Col>
                </Row>
                <br></br>
                <Row>
                <Col className="rest1" md={4}><a href="/madurai/colleges"><img src={require('./colleges.png')} width={310} height={310}></img></a><h2 className="displaymap">Colleges</h2></Col>
                    <Col className="rest1" md={4}><a href="/madurai/tourist"><img src={require('./tourist.png')} width={310} height={310}></img></a><h2 className="displaymap3">Tourist Places</h2></Col>
                    <Col className="rest1" md={4}><a href="/madurai/hotels"><img src={require('./room.png')} width={320} height={320}></img></a><h2 className="displaymap6">Hotels</h2></Col>
                    
                </Row>
                <br></br>
                <Row>
                <Col className="rest1" md={4}><a href="/madurai/shops"><img src={require('./shopping.jpg')} width={320} height={320}></img></a><h2 className="displaymap5">Shopping</h2></Col>
                    <Col className="rest1" md={4}><a href="/madurai/functionhalls"><img src={require('./functionhall.png')} width={320} height={320}></img></a><h2 className="displaymap3">Function Halls</h2></Col>
                    <Col className="rest1" md={4}><a href="/madurai/theatres"><img src={require('./cinema.png')} width={310} height={310}></img></a><h2 className="displaymap5">Theatres</h2></Col>
                    
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
export default KovaiMap;