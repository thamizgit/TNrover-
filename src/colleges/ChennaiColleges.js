import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";

function ChennaiColleges() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Colleges in Chennai</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/queen.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Queen Mary's</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      QUEEN MARYS COLLEGE, Dr Radha Krishna Salai, Mylapore,
                      Chennai 600004
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Womens college</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8.30am-5.30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">044 2844 4995</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                    <Icon.Star></Icon.Star>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/qr4XthYBAg6hhnpv8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.queenmaryscollege.edu.in/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/srmeaswari.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">SRM Easwari</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      162, Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Engineering College</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8am–5:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">044 4392 3041</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.Star></Icon.Star>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/1wARuqCWhaWSpKeM6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://srmeaswari.ac.in/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/stella.jpeg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Stella Maris</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Cathedral Rd, Poes Garden, Gopalapuram, Chennai, Tamil
                      Nadu 600086
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Womens College</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9.00am–4:00pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">044 2811 1987</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/SgaSZe33UpNSZvTz9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://stellamariscollege.edu.in/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/loyalaclg.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Loyola</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      24, 9, Nelson Manickam Rd, Nungambakkam, Chennai, Tamil
                      Nadu 600034
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">University</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8:30am–5:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">144 2817 8291</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/8v1vcBPmXF78inm29"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://loyolacollege.edu/"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/annauni.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Anna University</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      12, Sardar Patel Rd, Anna University, Guindy,
                      Chennai,TamilNadu 600025
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">University</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8:30am–4:45pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">044 2220 3112</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/QkAuWwE9BFgeUTP16"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.annauniv.edu/index.php"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/mit.jpeg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">MIT</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      MIT Rd, Radha Nagar, Chromepet, Chennai, Tamil Nadu 600044
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type:{" "}
                    <span className="time">
                      Engineering institute(Central govt.)
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8:30am–4:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">044 2251 6002</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/dfDGFdWNTvBtXoAC7"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.mitindia.edu/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/panimalr.png")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Panimalar</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      BANGALORE TRUNK ROAD, VARADHARAJAPURAM, Poonamallee,
                      Chennai, Tamil Nadu 600123
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Engineering College</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am–5pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">090438 90983</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.Star></Icon.Star>
                    <Icon.Star></Icon.Star>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/UEqtg9e1pMFFGnSi9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://panimalaradmission.com/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/madras.jfif")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Madras Medical College</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      near, Station, Poonamallee High Rd, Park Town, Chennai,
                      Tamil Nadu 600003
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Medical College(Govt.)</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8:30am–4:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">044 2530 5000</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/vErwBgtcG6ZArCqd8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.mmc.ac.in/mmc/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Row className="fol" justify="around">
        <Col md={12} className="head">
          <h2>Follow Us For More Information</h2>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
export default ChennaiColleges;
