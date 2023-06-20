import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import "../module.css";
import { Link } from 'react-router-dom';
import Footer from "../footer/Footer";

function Cities() {
  
  return (
    <div className="citiesmain">
      <Container className="hov" fluid>
        <Row justify="around">
          <Col md={4}>
            <Link to="/chennai">
              <img
                src={require("../images/chennai.jpg")}
                alt="logo"
                width={450}
                height={300}
              />
            </Link>
          </Col>
          <br></br>
          <Col md={4}>
            <Link to="/madurai">
              <img
                src={require("../images/madurai.jpg")}
                alt="logo"
                width={450}
                height={300}
              />
            </Link>
          </Col>
          <br></br>
          <Col md={4}>
            <Link to="/kovai">
              <img
                src={require("../images/coimbatore.jpg")}
                alt="logo"
                width={450}
                height={300}
              />
            </Link>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row justify="around">
          <Col md={4}>
            <Link to="/vellore">
              <img
                src={require("../images/vellore.jpg")}
                alt="logo"
                width={450}
                height={300}
              />
            </Link>
          </Col>
          <br></br>
          <Col md={4}>
            <Link to="/salem">
              <img
                src={require("../images/salem.jpg")}
                alt="logo"
                width={450}
                height={300}
              />
            </Link>
          </Col>
          <br></br>
          <Col md={4}>
            <Link to="/cuddalore">
              <img
                src={require("../images/cuddalore.jpg")}
                alt="logo"
                width={450}
                height={300}
              />
            </Link>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row justify="around">
          <Col md={4}>
            <Link to="/erode">
              <img
                src={require("../images/erode.jpg")}
                alt="logo"
                width={450}
                height={300}
              />
            </Link>
          </Col>
          <br></br>
          <Col md={4}>
            <Link to="/tiruppur">
              <img
                src={require("../images/tiruppur.jpg")}
                alt="logo"
                width={450}
                height={300}
              />
            </Link>
          </Col>
          <br></br>
          <Col md={4}>
            <Link to="/nilgiris">
              <img
                src={require("../images/nilgiris.jpg")}
                alt="logo"
                width={450}
                height={300}
              />
            </Link>
          </Col>
        </Row>
        <br></br>
      <Row className="fol">
        <Col md={12} className="head">
          <h2>Follow Us For More Information</h2>
        </Col>
      </Row>
      </Container>

      
      <Footer />
    </div>
  );
}
export default Cities;
