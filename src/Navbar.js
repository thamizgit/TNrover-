import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialMediaIconsReact } from "social-media-icons-react";
import './Navbar.css'
import * as Icon from 'react-bootstrap-icons';

import React from 'react';
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';
import { hover } from '@testing-library/user-event/dist/hover';
import UserDetails from './userDetails';
import { useState } from 'react';
function App() {  
  const style1={color:"darkgreen",padding:"20px",fontSize:"20px"};
  const style2={color:"darkgreen",fontSize:"20px",padding:"12px",};
  const [name,setName]=useState("");
  const style3={paddingRight:"0px"};
  return (  
    <Navbar className="nav" bg="transparent" expand="md">  
    <Container fluid>  
      <Navbar.Brand  href="#home"><img className="rad"  src={require('./tnrover.png')} alt='logo' width={150} /></Navbar.Brand> 
      
      <div style={{
        float:"right",
      }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link style={style1} href="/cities">Home</Nav.Link>  
          <Nav.Link style={style1} href="/about">About</Nav.Link>  
          <NavDropdown  bg="light" style={style2} title="Top Cities" id="basic-nav-dropdown">  
            <NavDropdown.Item className="block" style={{fontSize:20}}  href="/chennai">Chennai</NavDropdown.Item>  
            <NavDropdown.Item className="block" style={{fontSize:20}} href="#action/3.2">Madurai</NavDropdown.Item>  
            <NavDropdown.Item className="block" style={{fontSize:20}} href="#action/3.3">Erode</NavDropdown.Item> 
             
             
            <NavDropdown.Item className="block" style={{fontSize:20}} href="#action/3.4">Salem</NavDropdown.Item>  
          </NavDropdown>
          <Nav.Link style={style1} href="/"><Icon.Person></Icon.Person></Nav.Link>  
          <Nav.Link style={style1} href="/"><Icon.DoorOpen></Icon.DoorOpen></Nav.Link>  
        </Nav>  
       
      </Navbar.Collapse>  
      </div>
    </Container>  
  </Navbar>  
  );  
}  
export default App;  