import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function Salemtheatre(){
    return(
        <div>
            
            <Navbar />
            <Container className="back" fluid>
              
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Theatres in salem</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3}> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./arrs.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">ARRS Multiplex Theater</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">2-94-95, Meyyanur Bypass Rd, Meyyanur, Salem, Tamil Nadu 636004</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Multiplex</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8.30</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">none</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/ARRS+Multiplex+Theater/@11.6679201,78.0641495,13z/data=!4m9!1m2!2m1!1sth%C3%A9%C3%A2tre+in+Salem,+Tamil+Nadu!3m5!1s0x3babf041dc7f8361:0x95fe145b6ce56c04!8m2!3d11.6679264!4d78.1341883!15sCh50aMOpw6J0cmUgaW4gU2FsZW0sIFRhbWlsIE5hZHWSAQ1tb3ZpZV90aGVhdGVy4AEA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://in.bookmyshow.com/salem/cinemas/arrs-multiplex-salem/ARRS" variant="primary">Book</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./Aascars.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Aascars Multiplex</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">194/55, Kallarampatty Main Rd, Erumapalayam, Salem, Tamil Nadu 636015</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Multiplex</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">12–2:30pm, 7–9pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">044 2836 8333</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Aascars+Multiplex/@11.6679201,78.0641495,13z/data=!4m9!1m2!2m1!1sth%C3%A9%C3%A2tre+in+Salem,+Tamil+Nadu!3m5!1s0x3babf1d41c7f1419:0xdebc3a7ab61d22b4!8m2!3d11.6480695!4d78.1617759!15sCh50aMOpw6J0cmUgaW4gU2FsZW0sIFRhbWlsIE5hZHWSAQ1tb3ZpZV90aGVhdGVy4AEA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://in.bookmyshow.com/salem/cinemas/aascars-multiplex-salem/ASMS" variant="primary">Book</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./inox.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Inox Cinemas</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Rajiv Gandhi Street Meyyanur,1st Floor, Reliance Mall, 5 Rd,Salem, Tamil Nadu 636005</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Inox</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">6:30am–11pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">09840505501</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button  href="https://www.google.com/maps/place/Inox+Cinemas+Salem/@11.6679201,78.0641495,13z/data=!4m9!1m2!2m1!1sth%C3%A9%C3%A2tre+in+Salem,+Tamil+Nadu!3m5!1s0x3babf1501c2c3391:0x6ee2b3cc5a627cb5!8m2!3d11.6744787!4d78.1326021!15sCh50aMOpw6J0cmUgaW4gU2FsZW0sIFRhbWlsIE5hZHWSAQ1tb3ZpZV90aGVhdGVy4AEA" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="https://www.inoxmovies.com/" variant="primary">Book</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./sangeetha-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Sangeeth & Suprageeth Cinemas</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">AA Rd, Sendarapatti, Gugai, Salem, Tamil Nadu 636006</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">single screen</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">044 2811 5770</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Sangeeth+%26+Suprageeth+Cinemas/@11.6529398,78.0646248,13z/data=!4m10!1m3!2m2!1ssalem+theatre!6e1!3m5!1s0x3babf1d490569d09:0xbc681c1f2f3823e8!8m2!3d11.6478473!4d78.1586291!15sCg1zYWxlbSB0aGVhdHJlWg8iDXNhbGVtIHRoZWF0cmWSAQ1tb3ZpZV90aGVhdGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5OZVdWbVFsOTNSUkFC4AEA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://paytm.com/movies/salem/sangeeth-cinemas-a-c-2k-3d-gugai-c/9405" variant="primary">Book</Button>
        
        
        
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
      <Card.Img variant="top" src={require('./gowri-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Kasthoori Cinemas (Gowri Theatre)</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">No. 3/50, K.M.B. Complex, Omalur Main Rd, Swarnapuri, Salem, Tamil Nadu 636004</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Restaurant</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">04272447232</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Kasthoori+Cinemas+(Gowri+Theatre)/@11.6584108,78.0628419,12.74z/data=!4m10!1m3!2m2!1ssalem+theatre!6e1!3m5!1s0x3babf04294d1adf7:0xd4cff7be3318f3a!8m2!3d11.6741059!4d78.1350121!15sCg1zYWxlbSB0aGVhdHJlWg8iDXNhbGVtIHRoZWF0cmWSAQ1tb3ZpZV90aGVhdGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU0wYlU0emJuRm5SUkFC4AEA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="http://www.ticketnew.com/" variant="primary">Book</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./sapna-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">ARK Complex: Sapna</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time"> 39, College Ln, Thousand Lights West, Nungambakkam, Chennai, Tamil Nadu 600006</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">single screen</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">044 4203 5265</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/ARK+Complex:+Sapna/@11.6480474,77.8819415,10z/data=!4m10!1m3!2m2!1ssalem+theatre!6e1!3m5!1s0x3babf1d41d0d763b:0x41facb08837032e8!8m2!3d11.6480151!4d78.1622344!15sCg1zYWxlbSB0aGVhdHJlWg8iDXNhbGVtIHRoZWF0cmWSAQ9zaG9wcGluZ19jZW50ZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkJiemt6VGxaUkVBReABAA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.indiainfo.net/place/ark-complex-sapna-2305707" variant="primary">Book</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./mnk-salem.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">MNK Theatre</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">near, selliyamman kovil street, Mallasamudram, Tamil Nadu 637503</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">4k screen</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">8am</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">09944524242</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://in.bookmyshow.com/salem/cinemas/mnk-vel-theatre-mallasamudhram/MNKVnk-" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="https://in.bookmyshow.com/salem/cinemas/mnk-vel-theatre-mallasamudhram/MNKV" variant="primary">Book</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3}className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./prakash.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Prakash Theater Salem</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">43, Gugai - Erumapalayam Rd, Kitchipalayam, Salem, Tamil Nadu 636015</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Single screen</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">7apm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">09952174134</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Prakash+Theater+Salem/@11.661379,78.079023,12z/data=!4m10!1m3!2m2!1ssalem+theatre!6e1!3m5!1s0x3babf17f55092fef:0x222e55274f4c4102!8m2!3d11.6492515!4d78.1622923!15sCg1zYWxlbSB0aGVhdHJlkgENbW92aWVfdGhlYXRlcuABAA" className="locate" variant="primary">Locate</Button>
        <Button className="menu"  href="https://in.bookmyshow.com/salem/cinemas/prakash-cinema-salem/PSLM" variant="primary">Book</Button>
        
        
        
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
export default Salemtheatre;