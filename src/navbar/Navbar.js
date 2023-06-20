import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import React from "react";
import { FaCaretDown } from 'react-icons/fa';
import useAuth from "../hooks/useAuth";
function App() {
  const style1 = {
    color: "darkgreen",
    margin: "1rem",
    padding: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration:"none",
    hover: { color: "white" },
  };
  
  const [displayDrop, setDisplayDrop] = useState(false);
  const [displayLog,setDisplayLog] = useState(false);
  const {auth,setAuth} = useAuth();

  const handleLogOut = () => {
      setAuth({});
  }
  return (
    <Navbar className="nav" bg="transparent" expand="md">
      <Container fluid>
        <Navbar.Brand href="/cities">
          <img
            className="rad"
            src={require("../images/tnrover.png")}
            alt="logo"
            width={150}
          />
        </Navbar.Brand>

        <div
          style={{
            float: "right",
          }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="menu" className="me-auto">
              <Link style={style1} to="/">
                Home
              </Link>

              <Link style={style1} to="/about">
                About
              </Link>
              <Link
                onClick={() => setDisplayDrop(!displayDrop)}
                className="drop-down"
                style={style1}
                to=""
              >
                Top Cities<FaCaretDown style={{margin:"-5px 0 0 5px"}}/>
              </Link>
              {displayDrop && (
                <article className="drop-block">
                  <ul>
                    <Link to="/chennai">
                      <li>Chennai</li>
                    </Link>
                    <Link to="/kovai">
                      <li>Kovai</li>
                    </Link>
                    <Link to="/salem">
                      <li>Salem</li>
                    </Link>
                    <Link to="/tiruppur">
                      <li>Tiruppur</li>
                    </Link>
                  </ul>
                </article>
              )}

              <Link style={style1} to="/signup">
                <Icon.Person></Icon.Person>Register
              </Link>
              {!auth.username &&
              <Link style={style1} to="/signin">
                <Icon.DoorOpen></Icon.DoorOpen>Login
              </Link> }
              {auth.username && ( <>
              <button onClick={()=>setDisplayLog(!displayLog)} style={style1}>
                <Icon.Person></Icon.Person>{auth.username}<FaCaretDown style={{margin:"-5px 0 0 5px"}}/>
              </button>
              {displayLog && (
                <article style={{position:"absolute",top:"8rem",left:'90%'}}>
                  <ul style={{listStyle:"none",display:"flex",flexDirection:"column"}}>
                    <Link onClick={()=>handleLogOut()} to='/'>
                      <li>LogOut</li>
                      </Link>
                  </ul>
                </article>
              )}
              </>
              )
              }
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
export default App;
