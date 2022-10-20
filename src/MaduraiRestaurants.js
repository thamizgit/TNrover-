import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function MaduraiRestaurants(){
    return(
        <div>
            
            <Navbar />
            <Container className="back" fluid>
              
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Restaurants in Madurai</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraikitchen.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Madurai Kitchen</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Courtyard, 168, Alagar Kovil Main Rd, Ramaond Reserve Line, Madurai 625002</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Indian Restaurant</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">7am–10pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2424 4555</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/iPxJcLsPQctDkN3p8" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.zomato.com/madurai/madurai-kitchen-1-kk-nagar/menu" variant="primary">Menu</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./maduraibistro.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Bistro 1427</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">AH43, Kamarajar Salai, Madurai Main, Madurai, Tamil Nadu 625009</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Fine dining Restaurant</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">11am–10:30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">099408 56171</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://g.page/bistro1427madurai?share" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.zomato.com/madurai/bistro-1427-kamarajar-salai/menu" variant="primary">Menu</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./maduraibanyan.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">The Banyan</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Heritage Madurai, 11, Melakkal Rd, Kochadai, Madurai, Tamil Nadu 625016</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Middle Eastern Restaurant</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">7:30am–10:30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">045 2238 5455</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button  href="https://goo.gl/maps/J7SjzeuG1zx1r652A" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="https://www.zomato.com/madurai/the-banyan-resturant-doak-nagar" variant="primary">Menu</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./copper.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">COPPER CHIMNEY</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> 73, Cathedral Rd, Kanakasri Nagar, Gopalapuram, Chennai, Tamil Nadu 600086</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">North Indian Restaurant</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">12–4pm  , 7–11pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">044 2811 5770</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/eEoPbURoe3tXeeQ76" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://delivery.copperchimney.in/copper-chimney-all-outlets" variant="primary">Menu</Button>
        
        
        
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
      <Card.Img variant="top" src={require('./barbeque.jfif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Barbeque Nation</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">No 39,Star City Serviced Apartment, Bazullah Rd, near The Grand Sweets,T. Nagar</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Restaurant</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">12–5pm, 7–10pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">080 6902 8724</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://g.page/BNTNagar?share" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.barbequenation.com/restaurants/chennai/t-nagar?utm_source=GMB&utm_medium=chennai%2Ft-nagar&utm_campaign=GMB_chennai%2Ft-nagar" variant="primary">Menu</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./marina.avif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">The Marina</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> 39, College Ln, Thousand Lights West, Nungambakkam, Chennai, Tamil Nadu 600006</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Sea Food</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">12–3pm, 7–11pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">044 4203 5265</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/D1L4Ps5uBPKECCHV9" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://marina.advantagefoods.in/" variant="primary">Menu</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./benjarong.avif')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Benjarong-Thai</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">146, TT Krishnamachari Rd, Cooperative Colony, Sri Ram Nagar, Alwarpet, Chennai</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Thai Restaurant</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">12–3pm , 7–10:30pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">63749 99514</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://g.page/benjarong_in?share" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="https://www.dineout.co.in/chennai/benjarong-alwarpet-central-chennai-1657/menu" variant="primary">Menu</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./avartana.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Avartana</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">ITC Grand Chola Hotel, Little Mount, Guindy, Chennai, Tamil Nadu 600032</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">South Indian Restaurant</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">7–11pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">144 2220 0000</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill></p>
        </Card.Text>
        <Button href="https://goo.gl/maps/MtAJx6DWj6cpGMa69" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.google.com/maps/place/Avartana/@13.010511,80.220708,3a,75y/data=!3m8!1e2!3m6!1sAF1QipPbDCPBKanOUeIJXnGMRk0S5PF-G5m9z3sbi1Mz!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPbDCPBKanOUeIJXnGMRk0S5PF-G5m9z3sbi1Mz%3Dw224-h298-k-no!7i3024!8i4032!4m11!1m2!2m1!1schennai+restaurants!3m7!1s0x3a52673d0e406a19:0x167382256c93d643!8m2!3d13.010511!4d80.220708!14m1!1BCgIYIQ!15sChNjaGVubmFpIHJlc3RhdXJhbnRzWhUiE2NoZW5uYWkgcmVzdGF1cmFudHOSARdzb3V0aF9pbmRpYW5fcmVzdGF1cmFudOABAA" variant="primary">Menu</Button>
        
        
        
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
export default MaduraiRestaurants;