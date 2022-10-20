import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function Chennaitourist(){
    return(
        <div>
            
            <Navbar />
            <Container className="back" fluid>
                
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Tourist Places in Chennai</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./marina.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Marina Beach</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">376P+2JP, Marina Beach, Triplicane, Chennai, Tamil Nadu 600005</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Beach</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–6pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">None</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Entry Fee : <span className="time">Free</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/q1qRLFSmqmokiXHN8" className="locate" variant="primary">Locate</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./guindy.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-3">Guindy National Park</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> Rangeguindy, Opp IIT Madras, Guindy, Chennai, Tamil Nadu, 600025</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Zoological park</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–5:30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">044 2235 1471</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Entry Fee : <span className="time">INR 15</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/rBf73JkLgCRCqS887" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./lighthouse.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Lighthouse</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> Marina Beach Road, Marina Beach, Mylapore, Chennai, Tamil Nadu 600004</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Lighthouse</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–1pm  3–6pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">None</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Entry Fee : <span className="time">INR 25</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/m4eau9rYWdM5QFEfA" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom" > 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./dakshina.png')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-3">DakshinaChitra Museum</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">DakshinaChitra Museum, East Coast Road,
Muttukadu, Kanchipuram District Pin : 603 112</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Heritage Museum</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–5pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">098410 20149</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Entry Fee : <span className="time">from INR 350</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/nS45vPAUGsi3dAcj7" className="locate" variant="primary">Locate</Button>
        
        
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
      <Card.Img variant="top" src={require('./annazoo.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-3">Anna Zoological Park</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> Grand Southern Trunk Rd, Vandalur, Tamil Nadu 600048</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Zoological Park</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–5pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">044 2954 2301</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Entry Fee : <span className="time">from INR 50</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/oC5BcdJaJD6mPJFB9" className="locate" variant="primary">Locate</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./marun.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-3">Marundheeshvarar Temple</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> 8, W Tank St, Ambedkar Nagar, Lalitha Nagar, Thiruvanmiyur, Chennai 600041</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Temple</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">5am–12pm  4–9pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">044 2441 0477</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Entry Fee : <span className="time">Free</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/u5DBUEcnMY8adi1MA" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./semmozhi.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Semmozhi Poonga</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">3722+6H7, Cathedral Rd, Ellaiamman Colony, Teynampet, Chennai,600086</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Botanical Garden</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–6pm</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Phone : <span className="time">None</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Entry Fee : <span className="time">INR 15</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/kxh7UJkCF687QFko6" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  

    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./mgm.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">MGM Dizzee World</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time-1">R6GV+FF9, 1/74, SH 49, Muthukadu, Tamil Nadu 603112</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Amusement Park</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10:30am–6pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">095000 63716</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Entry Fee : <span className="time">INR 699</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button  href="https://g.page/mgmdizzee?share" className="locate" variant="primary">Locate</Button>
        
        
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
export default Chennaitourist;