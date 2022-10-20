import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function Salemfunctionhall(){
    return(
        <div>
            
            <Navbar />
            <Container className="back" fluid>
              
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Function Hall in Salem</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3}className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./jmj-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">JMJ GRAND HALL</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Near Saradha College Road, Convent Rd, Mittapudur, Salem, Tamil Nadu 636016</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Amenities:<span className="time">Guest accommodation, bridal dressing room , parking area</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">09092692111</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/JMJ+GRAND+HALL/@11.6597277,78.0637805,12z/data=!4m9!1m2!2m1!1sfunctionhall+in+salem!3m5!1s0x3babf1db69059709:0x6a09e8c35647d98e!8m2!3d11.6812257!4d78.1464289!15sChdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbVoZIhdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbZIBDGJhbnF1ZXRfaGFsbJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VObE1tWkRWUzEzUlJBQuABAA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.weddingwire.in/banquet-halls/jmj-grand-hall--e379156" variant="primary">Visit</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./lrn-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1"></h2>LRN Marriage Hall</b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">No. 51, Sarada College Rd, LRN Colony, Hasthampatti, Salem, Tamil Nadu 636007</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Amenities:<span className="time">Guest accommodation,in-house restaurant,valet parking</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">12–2:30pm, 7–9pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">427-2314466</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/LRN+Marriage+Hall/@11.6774609,78.0836475,12z/data=!4m9!1m2!2m1!1sfunctionhall+in+salem!3m5!1s0x3babf05262a58549:0x69418568c249d74c!8m2!3d11.6774609!4d78.1536853!15sChdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbVoZIhdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbZIBDGJhbnF1ZXRfaGFsbOABAA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.weddingwire.in/banquet-halls/hotel-l-r-n-excellency--e148875" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./jks-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">GK convention hall</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Behind Police Station,Alagapuram,Periya Pudur,Tamil Nadu 636016</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Amenities:<span className="time">Air Conditioned Mini Hall,Perfectly Engineered System</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time"> 9943599435
</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button  href="https://www.google.com/maps/place/GK+convention+hall/@11.6597277,78.0637805,12z/data=!4m9!1m2!2m1!1sfunctionhall+in+salem!3m5!1s0x3babf12da9f95223:0x314b09be49911ed6!8m2!3d11.6785113!4d78.1420347!15sChdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbVoZIhdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbZIBDWZlc3RpdmFsX2hhbGyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlBlVTl5Um5OblJSQULgAQA" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="https://www.gksconventions.com/" variant="primary">Visit</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./anadham-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Anandham Hall</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Sumanagalee Mahal, 14/1A, Omalur Main Rd, near Pothys Showroom,Arisipalayam, Salem, Tamil Nadu 636009</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Amenities:<span className="time">valet parking,Guest accommodation</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">04272229999</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Anandham+Hall/@11.660047,78.0637803,12z/data=!4m9!1m2!2m1!1sfunctionhall+in+salem!3m5!1s0x3babf036f86c8819:0xf91699bb9190385!8m2!3d11.6654803!4d78.1451551!15sChdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbZIBDGJhbnF1ZXRfaGFsbOABAA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.justdial.com/Salem/Anandham-Hall-Near-TVS-Petrol-Bunk-Axis-Bank-Arisipalayam/0427PX427-X427-140121143721-P9D1_BZDET" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
 </Row>
                <br>
                </br>
                <br>
                </br>
                <Row justify="around" >
                 <Col md={3}className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./karunaya-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Karunya A/C Hall</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">76/67, Near Thinathanthi Office, Opp. Gandhi Stadium, Tamil Nadu</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Amenities:<span className="time">parking,Guest accommodation</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am-10pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">09944530243</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Karunya+A%2FC+Hall/@11.660047,78.0637803,12z/data=!4m9!1m2!2m1!1sfunctionhall+in+salem!3m5!1s0x3babf033ff45875b:0x23d3c263e3386d1c!8m2!3d11.6588812!4d78.1529792!15sChdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbZIBDGJhbnF1ZXRfaGFsbOABAA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.wedmegood.com/wedding-venues/Karunya-AC-Hall-1282613" variant="primary">Visit</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./kokila-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Kokila Marriage Hall</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">J4VX+JFG, Linemedu, Gugai, Salem, Tamil Nadu 636006</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Amenities:<span className="time">Parking,Guest accommodation</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am-10pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">9344407078</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Kokila+Marriage+Hall/@11.660047,78.0637803,12z/data=!4m10!1m3!2m2!1sfunctionhall+in+salem!6e1!3m5!1s0x3babf029c9cc553b:0xbe658a9aeb0f92dd!8m2!3d11.6440523!4d78.1487561!15sChVmdW5jdGlvbmhhbGwgaW4gc2FsZW1aFyIVZnVuY3Rpb25oYWxsIGluIHNhbGVtkgENd2VkZGluZ192ZW51ZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VORk1qbG1OeTEzUlJBQuABAA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.justdial.com/Salem/Kokila-Kalyana-Mandapam-Behind-Commisioner-Office-Gugai-Salem/0427P427STD1203385_BZDET" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./shanthi-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Shanthi Radhakrishnan </h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Muthunaickenpatti Main Rd,Old Suramangalam,Tamil Nadu 636302</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Amenities:<span className="time">Complimentary Bridal Suite,Plug-in Music</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am-9pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">9490797898</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://www.google.com/maps/place/Shanthi+Radhakrishnan+Thirumana+Maligai/@11.660047,78.0637803,12z/data=!4m9!1m2!2m1!1sfunctionhall+in+salem!3m5!1s0x3babfa5166d62927:0x4a48922b74544249!8m2!3d11.6796166!4d78.0996729!15sChdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbVoZIhdmdW5jdGlvbiBoYWxscyBpbiBzYWxlbZIBDXdlZGRpbmdfdmVudWWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjFOalZsZEVWQkVBReABAA" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="https://www.justdial.com/Salem/Shanthi-Radhakrishnan-Thirumana-Maligai-Ac-Muthunayakkanpatti-Main-Road-Jagir-Reddipatty/0427PX427-X427-190228123648-K3N5_BZDET" variant="primary">Visit</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./kmb-salem.png')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">KMB Convention Centre</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">KMB Complex, K.M.B. Complex, Omalur Main Rd, Swarnapuri, Salem, Tamil Nadu 636005</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Amenities:<span className="time">Wedding Planner on site,Dance lighting,turf</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">7–10pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">09003344882</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/KMB+Convention+Centre/@11.6597356,78.1163117,14z/data=!4m10!1m3!2m2!1sfunctionhall+in+salem!6e1!3m5!1s0x3babf042ecc302b9:0x8bbd1a6893ba8ba7!8m2!3d11.673839!4d78.135019!15sChVmdW5jdGlvbmhhbGwgaW4gc2FsZW1aFyIVZnVuY3Rpb25oYWxsIGluIHNhbGVtkgENd2VkZGluZ192ZW51ZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOdmFYVmxja1JSRUFF4AEA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://kmbkalyanamandapam.business.site/" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
 </Row>

            </Container>
            <br></br>
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
export default Salemfunctionhall;