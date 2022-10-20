import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function ChennaiTheatres(){
    return(
        <div>
            <Navbar/>

            <Container className="back" fluid>
              
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Theatres in Chennai</h2></Col>
                </Row>
                
                <br></br>
<Row justify="around" >
    <Col md={3} className="zoom"> 
    <Card className="card" style={{ width: '350px' }}>
        <Card.Img variant="top" src={require('./jazz.jpg')  } />
        <Card.Body>
        <Card.Title><b><h2 class="display-1">Jazz Cinemas LUXE</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Phoenix Market City, No. 142, 2nd Floor, Indira Gandhi Nagar, Velachery, Chennai, Tamil Nadu 600042</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am-11pm</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://g.page/jazz-cinemas-luxe-IMAX?share" className="locate" variant="primary">Locate</Button>   
        <Button className="menu"  href="https://www.jazzcinemas.com/" variant="primary">Book</Button>     
        </Card.Body>
    </Card>
    </Col>  
    
    <Col md={3} className="zoom"> 
    <Card className="card" style={{ width: '350px' }}>
        <Card.Img variant="top" src={require('./pvr.jpg')  } />
        <Card.Body>
        <Card.Title><b><h2 class="display-1">PVR VR</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">3rd Floor VR Mall MetroZone 44, Pillaiyar Koil Street, 100 Feet Rd, Anna Nagar, Chennai, Tamil Nadu 600040</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am-1am</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/j4GbgWdz83sxcUJn7" className="locate" variant="primary">Locate</Button>   
        <Button className="menu"  href="https://www.pvrcinemas.com/" variant="primary">Book</Button>     
        </Card.Body>
    </Card>
    </Col>

    <Col md={3} className="zoom"> 
    <Card className="card" style={{ width: '350px' }}>
        <Card.Img variant="top" src={require('./pvrplazzo.jpg')  } />
        <Card.Body>
        <Card.Title><b><h2 class="display-1">PVR SPI Palazzo</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">3rd ,Nexus Vijaya Mall,Forum Vijaya Mall, Chennai, Tamil Nadu 600026, India</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am-1am</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/RuaYP3i4M1tnJu476" className="locate" variant="primary">Locate</Button>  
        <Button className="menu"  href="https://www.pvrcinemas.com/" variant="primary">Book</Button>      
        </Card.Body>
    </Card>
    </Col>

    <Col md={3} className="zoom"> 
    <Card className="card" style={{ width: '350px' }}>
        <Card.Img variant="top" src={require('./ags.jpg')  } />
        <Card.Body>
        <Card.Title><b><h2 class="display-1">AGS Cinemas</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">No. 24, 1, Gopathi Narayanaswami Chetty Rd, Parthasarathi Puram, T. Nagar, Chennai, Tamil Nadu 600017</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am-11pm</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/HAyG4arBKrizP3tq9" className="locate" variant="primary">Locate</Button>  
        <Button className="menu"  href="https://www.agscinemas.com/" variant="primary">Book</Button>      
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
        <Card.Img variant="top" src={require('./sathyam.jpg')  } />
        <Card.Body>
        <Card.Title><b><h2 class="display-1">Sathyam Cinemas</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">8, Thiruvika Rd, Peters Colony, Royapettah, Chennai, Tamil Nadu 600014</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am-11pm</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/KAWbJRkL3xyye3pj6" className="locate" variant="primary">Locate</Button>  
        <Button className="menu"  href="http://www.pvrcinemas.com/" variant="primary">Book</Button>      
        </Card.Body>
    </Card>
    </Col>  
    
    <Col md={3} className="zoom"> 
    <Card className="card" style={{ width: '350px' }}>
        <Card.Img variant="top" src={require('./mayajaal.jpg')  } />
        <Card.Body>
        <Card.Title><b><h2 class="display-1">Mayajaal Multiplex</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Kanathur, 34/1, East Coast Rd, Chennai, Tamil Nadu 603112</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am-1am</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/nRG6ULMya4ewvJtZ9" className="locate" variant="primary">Locate</Button>   
        <Button className="menu"  href="http://www.mayajaal.com/" variant="primary">Book</Button>     
        </Card.Body>
    </Card>
    </Col>

    <Col md={3} className="zoom"> 
    <Card className="card" style={{ width: '350px' }}>
        <Card.Img variant="top" src={require('./gk4k.jpg')  } />
        <Card.Body>
        <Card.Title><b><h2 class="display-1">GK Cinemas 4K</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">25M6+JGF, Trunk Rd, Lakshmi Nagar, Porur, Chennai, Tamil Nadu 600116</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24/7</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/1xrW4orTsU5wKH6v6" className="locate" variant="primary">Locate</Button>     
        <Button className="menu"  href="http://www.srigopalakrishnacinema.com/" variant="primary">Book</Button>   
        </Card.Body>
    </Card>
    </Col>

    <Col md={3} className="zoom"> 
    <Card className="card" style={{ width: '350px' }}>
        <Card.Img variant="top" src={require('./sangam.jpg')  } />
        <Card.Body>
        <Card.Title><b><h2 class="display-1">Sangam Cinemas</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">870, Poonamallee High Rd, Near Hindustan Petrol Bunk, Kilpauk, Chennai, Tamil Nadu 600010</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am-1am</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/zzW6SrphHn14EExK8" className="locate" variant="primary">Locate</Button>  
        <Button className="menu"  href="http://www.sangamcinemas.com/" variant="primary">Book</Button>      
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
export default ChennaiTheatres;