import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
 import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function MaduraiFunctionhalls(){
    return(
        <div>
            
            <Navbar /> 
            <Container className="back" fluid>
                
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Function Halls in Madurai</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraikm.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">K M Mahal</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> Near, 179/1 , KM Plaza, Bypass Rd, Chokkalinga Nagar, Madurai, Tamil Nadu 625016</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Open 24HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2238 3712</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/nVaGNUjwLWW2Gj6A6" className="locate" variant="primary">Locate</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraijayam.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Jayam Mahal</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">No. 1/10 A, Ponmani by Pass, Opposite Axis Bank, Ponmani Bypass, Madurai 625010</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time"> 145 2230 0789</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/s1BS2JD2dgSKuL9cA" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./maduraikg.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">KG Dharbar</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Ricky Towers, Bypass R, Ram Nagar-D, S S Colony, Tamil Nadu 625016 </span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–8pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">77089 85899</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button  href="https://g.page/kgdharbar?share" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraiav.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">AV Mahal</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">W3JW+VF4, Bypass Road, Bypass Road, Bethania Puram, near SBT, Madurai 625016</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–8pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">145 2238 7221</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/6HQz8Q5rncKSdvfn7" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  



                    

                </Row>
                <br>
                </br>
                
                
                <br></br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraistar.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Star Park</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">41 ,  1st East Main Rd ,  Anna Nagar, Madurai, Tamil Nadu 625020</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–7pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2439 0933</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/Lq9e2vhpzaLbavyv5" className="locate" variant="primary">Locate</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraicr.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">CR Mahal</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Viraganur, Ring Rd Cir, near Teppakulam, Madurai, Tamil Nadu 625009</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">094898 04050</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/PKYwzopSVtKfAhWe7" className="locate" variant="primary">Locate</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./maduraithillai.jfif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Thillai sivam</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">X4GR+67G, Tagore Nagar, Bharat Nagar, TWAD Colony, Tiruppalai, Madurai 625014 </span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–9pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">083330 01001 </span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/a2ENj1waiQGdukNG8" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./madurairaja.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Rajalakshmi Mahal</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">356, Vaigai Vadakarai Rd, Ranan Nagar, Madurai, Tamil Nadu 625020</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">81444 14434</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/KRf5SDbf5MYDDBxL7" className="locate" variant="primary">Locate</Button>
        
        
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
export default MaduraiFunctionhalls;