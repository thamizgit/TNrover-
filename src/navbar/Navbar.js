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
  const style2 = { color: "darkgreen", fontSize: "20px", padding: "12px",fontWeight:"bold" };
  const [displayDrop, setDisplayDrop] = useState(false);
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
              <Link style={style1} to="/cities">
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
                    <Link to="">
                      <li>Chennai</li>
                    </Link>
                    <Link to="">
                      <li>Kovai</li>
                    </Link>
                    <Link to="">
                      <li>Salem</li>
                    </Link>
                    <Link to="">
                      <li>Tiruppur</li>
                    </Link>
                  </ul>
                </article>
              )}

              <Link style={style1} to="/signup">
                <Icon.Person></Icon.Person>Register
              </Link>
              <Link style={style1} to="/">
                <Icon.DoorOpen></Icon.DoorOpen>Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
export default App;
