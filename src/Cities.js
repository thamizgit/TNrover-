import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import {Container , Row, Col} from 'react-bootstrap';  
import './module.css';
import Navbar from './Navbar';
import * as Icon from 'react-bootstrap-icons';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Chennai from './Chennai';
function Cities(){
    return(
        <div className="citiesmain">  
        <Navbar />
    <Container className='hov' fluid>  
        
    <Row justify="around" >  
    <Col md={4}><a href={"/chennai"}><img  src={require('./chennai.jpg')} alt='logo' width={450} height={300}/></a></Col>
    <br></br>
    <Col md={4}><a href='/madurai'><img src={require('./madurai.jpg')} alt='logo' width={450} height={300}/></a></Col>
    <br></br>
    <Col md={4} ><a href='/kovai'><img src={require('./coimbatore.jpg')} alt='logo' width={450} height={300}/></a></Col>
    
    
    </Row> 
    <br></br>
    <br></br>
    <Row justify="around" >  
    <Col md={4}><a href='#'><img src={require('./vellore.jpg')} alt='logo' width={450} height={300}/></a></Col>
    <br></br>
    <Col md={4}><a href='/salem'><img src={require('./salem.jpg')} alt='logo' width={450} height={300}/></a></Col>
    <br></br>
    <Col md={4} ><a href='#'><img src={require('./cuddalore.jpg')} alt='logo' width={450} height={300}/></a></Col>
    
    
    </Row> 
    <br></br>
    <br></br>
    <Row justify="around" >  
    <Col md={4}><a href='#'><img src={require('./erode.jpg')} alt='logo' width={450} height={300}/></a></Col>
    <br></br>
    <Col md={4}><a href='#'><img src={require('./tiruppur.jpg')} alt='logo' width={450} height={300}/></a></Col>
    <br></br>
    <Col md={4} ><a href='#'><img src={require('./nilgiris.jpg')} alt='logo' width={450} height={300}/></a></Col>
    
    
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
export default Cities;