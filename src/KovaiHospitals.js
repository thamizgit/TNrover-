import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function KovaiHospitals(){
    return(
        <div>
            
            <Navbar />
            <Container className="back" fluid>
                
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Hospitals in Coimbatore</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./kovairamachandra.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Sri Ramakrishna</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">395,Sarojini Naidu Rd,Siddhapudur,Balasundaram Layout,B.K.R Nagar 641044</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">042 2450 0000</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://g.page/sriramakrishnahospital?share" className="locate" variant="primary">Locate</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./kovaipsg.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">PSG Hospitals</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">No 1674, Avinashi Road, Peelamedu, Coimbatore - 641004, Behind Fun Mall</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">042 2434 5353</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://g.page/psghospitals?share" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./kovaiktvr.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">KTVR Group</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">20, Sree Narayana Guru Rd, Nesavaalar Colony, Saibaba Colony, Coimbatore 641011</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">042 2244 5451</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/ajBBLnxwfa7TRRiv9" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./kovaing.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">NG Hospital</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">577, Trichy Rd, Near B-5 Police Station, Agraharam, Singanallur, Tamil Nadu 641005   </span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">042 2259 5963</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/ukHZMVTp7wAgEhhM6" className="locate" variant="primary">Locate</Button>
        
        
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
      <Card.Img variant="top" src={require('./kovaimedical.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Kovai MedicalCenter</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">99, Avinashi Rd, Peelamedu, Indira Nagar, Coimbatore 641014</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">042 2432 3800</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/szwqwKv3F4Nz5t5U8" className="locate" variant="primary">Locate</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./kovaimed.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Med India Hospital</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">2X78+5WP, Dindigul - Bangalore Road, Ram Nagar, Coimbatore 641018</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">142 2223 0090</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/yYUVVroYA6AnL4uk7" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./kovaimedwin.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">MEDWIN Hospital </h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Trichy Rd, opposite Coimbatore Stock Exchange Ltd., Kallimadai 641005</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">073737 16959</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/o6d9qZvPV3umeVE79" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./kovairao.jfif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Rao Hospital</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">120, W Periasamy Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">24 HRS</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">096299 19191</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/waz2outY7GzhnnbK7" className="locate" variant="primary">Locate</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  



                    

                </Row>
                <br>
                </br>
                <br></br>
                

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
export default KovaiHospitals;