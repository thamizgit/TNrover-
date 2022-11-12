import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function MaduraiSchools(){
    return(
        <div>
            
            <Navbar />
            <Container className="back" fluid>
              
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Schools in Madurai</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraijeevana.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Jeevana School</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Jayanagar, near Dolphin matric School, Ponmeni, Madurai, Tamil Nadu 625016</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">ICSE School</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8:30am–4:30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2238 1058</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/Q3hi8Z9btNvhTBDK7" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://www.jeevanaschool.com/" variant="primary">Menu</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraishine.jfif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Shine International</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> 44, Maruthupandian Nagar, Main Road, Narimedu, Madurai Tamil Nadu 625002</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">International School</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am–5pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">098429 91005</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/z5sHu861TW5YSNkX7" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://preprimaryschools.com/school/shine-international-school-1623" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./maduraikeswick.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Keswick Public</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Past, Thinamani Nagar, Koodal Nagar, Madurai, Tamil Nadu 625018</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Higher Secondary School</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">6am–6pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2266 1697</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button  href="https://g.page/keswickpublicschool?share" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="http://www.keswickpublicschool.com/" variant="primary">Visit</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraifatima.jfif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Fatima Matric</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">14, Fatima Nagar Rd, Reserve line Area, Ramaond Reserve Line, Madurai 625014</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Matriculation School</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am–6pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2256 3600</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/C8SHMv3sS4kSHqkJ7" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://thefatimaschool.com/" variant="primary">Menu</Button>
        
        
        
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
      <Card.Img variant="top" src={require('./maduraisairam.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Sairam Matric</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">No ,5, Hakkim Ajmal Khan, H.A, K Road, Opp OCPM, Goripalayam, Tamil Nadu 625002</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Matriculation school</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8:50am–4pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone :  <span className="time">045 2253 0370</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/2WfPsSJLFvwk5sKg9" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://mdu.sairamschool.edu.in/" variant="primary">Visit</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./madurairoyal.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Royal Vidyalaya</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">CITU colony, Vaazhavanthaan St, Vilangudi, Madurai, Tamil Nadu 625018</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">CBSE School</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8:30am–4:30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">096 0080 5046</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://g.page/Royalschool?share" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://www.royalgroupofschools.com/" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./maduraipearls.jfif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Pearl's Pre School</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">No 29 AMP, Agraharam St, near jenatha sarbath, Simmakkal, Madurai 625001</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Pre school</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9:30am–7:30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">063854 99211</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star ></Icon.Star></p>
        </Card.Text>
        <Button  href="https://g.page/pearl-s-pre-school?share" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="https://preprimaryschools.com/school/pearls-pre-school-1664/about-us" variant="primary">Visit</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraijoseph.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">St.Joseph’s School</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">W47H+Q26, Old Kuyavar Palayam Rd, Madurai, Tamil Nadu 625009</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Girls Higher Secondary</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9.30am-5.30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2233 1943</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/V1XwESELdeRA7RDR8" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://stjosephgirlshssmadurai9.com/" variant="primary">Visit</Button>
        
        
        
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
export default MaduraiSchools;