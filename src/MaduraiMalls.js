import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function MaduraiMalls(){
    return(
        <div>
            
            <Navbar />
            <Container className="back" fluid>
                
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Shops in Madurai</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraivishal.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Vishaal De Mal</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">W4QP+8C4, Gokhale Rd, [no name], Madurai, Tamil Nadu 625002</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Shopping Mall</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–9:30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">098 4296 8285</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/eYoA2qZD32Y8XwX3A" className="locate" variant="primary">Locate</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraimilanem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">MILAN'EM MALL</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">KK Nagar Main Rd, Managiri, Madurai, Tamil Nadu 625020</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Shopping Mall</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–10pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2434 7000</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/xUkScHPt1NA7Y4PRA" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./maduraidmart.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">D Mart</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> V4M9+V33, Tuticorin - Madurai Rd, Avaniyapuram, Tamil Nadu 625012</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Supermarket</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–10pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">022 3340 0500</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/tMPGye6N26EF3bhA7" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraishoppers.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Shoppers Shop</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> 2, 6, Town Hall Rd, Madurai Main, Madurai, Tamil Nadu 625001</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Supermarket</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9.30am–10.30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">098431 74735</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/49SvdP8zLozXcBSY7" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  



                    

                </Row>
                <br>
                </br>
                <br>
                </br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraigiftz.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Giftz</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Anna Nagar Main Road, opp. to ambiga theatre, Anna Nagar, Madurai 625020</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Gift Shop</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–9pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">091597 53753</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://g.page/giftz-madurai?share" className="locate" variant="primary">Locate</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraipothys.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Pothys</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">159, W Masi St, Valaiyal Kadai, Madurai Main, Madurai, Tamil Nadu 625001</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Clothing Store</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–10pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">089395 93990</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/mY3vtaddEKRqdirw7" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./maduraiapple.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Apple Shopping</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Plot no 581,1st floor, 2nd East Main Rd, Anna Nagar, Madurai, Tamil Nadu 625020</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Store</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–10pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">089030 31666</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/pv2ucWVDjjw1EWhe8" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraikayal.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Kayal Boutique</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Shop No. 22, SBI Staff Colony 1St Street, Bypass Rd, Madurai, Tamil Nadu 625010</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Boutique</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–8pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">073394 43334</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/6xLecNyyFz9Sd7Wq8" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  



                    

                </Row>
                
            </Container>
            <br></br>
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
export default MaduraiMalls;