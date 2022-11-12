import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function MaduraiColleges(){
    return(
        <div>
            
            <Navbar />
            <Container className="back" fluid>
              
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Colleges in Madurai</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraimadura.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">The Madura</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">W455+W99, Tirupparankunram Rd, Agrini Twp, Vidhya Nagar, Madurai 625011</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Arts and Science college</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">10am–5pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2267 3354</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/6au6XMKjApkrZqKk6" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://www.maduracollege.edu.in/" variant="primary">Visit</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraithiagarajar.jfif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2 ">Thiagarajar College</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">#139, 140, Teppakulam W St, Kamarajar Salai, Tamil Nadu 625009</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">autonomous & government</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am–7pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2231 1875</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/4XqADcYFMsPrF5kY8" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://www.tcarts.in/" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./maduraimedical.jfif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Madurai Medical</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">W4GP+8MX, Panagal Rd, Alwarpuram, Madurai, Tamil Nadu 625020</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Medical College</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–5pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2253 2535</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/pXLugHwZk1EoiDco6" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="http://www.mdmc.ac.in/mdmc/content_page.jsp?sqf=12&sq1=contactus" variant="primary">Visit</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraikamaraj.jfif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">kamaraj University</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">W4PP+PJ9, Alagar Kovil Main Rd, Tallakulam, Tamil Nadu 625002</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">University</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8:30am–5:30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2245 8471</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/pfk3MVaaNq79b4E8A" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://mkuniversity.ac.in/new/" variant="primary">Menu</Button>
        
        
        
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
      <Card.Img variant="top" src={require('./maduraiamerican.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">American College</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Tamil Department Rd, Alwarpuram, Tallakulam, Tamil Nadu 625002</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Engineering College</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8:30am–4:45pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone :  <span className="time">045 2253 0070</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/BxKDGtJuZbidcHMv6" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://americancollege.edu.in/" variant="primary">Visit</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraisacs.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">SACS MAVMM</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">17, E Marret St, Nelpettai, Simmakkal, Madurai Main, Madurai 625301</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Engineering College</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Open 24 hours</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">083000 76901</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/qoR8pU6eGKWHyzDB9" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://sacsmec.in/web/page/students-register-form/" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./madurailady.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Lady Doak</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">W4QH+8MP, Hakim Ajmal Khan Rd, Tallakulam, Tamil Nadu 625002</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Womens College</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">9am–5pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2253 0527</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star><Icon.Star ></Icon.Star></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/UJ4rQFhYrTkYBb6q9" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="http://www.ladydoakcollege.edu.in/" variant="primary">Visit</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraivelammal.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Velammal College</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">NH85, Viraganur, Madurai , Tamil Nadu 625009</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Engineering and Technology College</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">7am–6pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">145 2246 5285</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/TC4PFq5cmYhjhKds5" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://www.vcet.ac.in/" variant="primary">Visit</Button>
        
        
        
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
export default MaduraiColleges;