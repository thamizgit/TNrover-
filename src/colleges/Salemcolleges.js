import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Salemcolleges() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Colleges in Salem</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/Sona-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Sona College of Technology</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Junction Main Rd, Salem, Tamil Nadu 636005
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Co-education</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9.30am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04274099999</span>
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
                  href="https://www.google.com/maps/place/Sona+College+of+Technology/@11.6781339,78.1222501,17z/data=!4m5!3m4!1s0x3babf065115b5f7d:0x1d08f4d05518b24d!8m2!3d11.6781339!4d78.1244388"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.sonatech.ac.in/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/vinayaka.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Kirupananda Variyar College</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      NH47 Periya Seeragapadi, Salem, Tamil Nadu 636308
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">co-education</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">+ 91 427 2477540</span>
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
                  href="https://www.google.com/maps/place/Vinayaka+Mission's+Kirupananda+Variyar+Engineering+College/@11.5786715,78.0473607,17z/data=!3m1!4b1!4m5!3m4!1s0x3babe4441ef6785f:0x87ecc27c93207ffc!8m2!3d11.5786715!4d78.0495494"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.vmkvec.ac.in/"
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
                src={require("../images/saradha-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Sri Sarada College for Women</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      M4HW+3X9, KMS Garden, Fairlands, Salem, Tamil Nadu 636016
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Girls college</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">+91 427 4550291</span>
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
                  href="https://www.google.com/maps/place/Sri+Sarada+College+for+Women/@11.6776698,78.1124593,14z/data=!4m9!1m2!2m1!1scolleges+in+salem!3m5!1s0x3babf05b29d2c0b5:0x19ceb0605c356629!8m2!3d11.6776698!4d78.1474782!15sChFjb2xsZWdlcyBpbiBzYWxlbVoTIhFjb2xsZWdlcyBpbiBzYWxlbZIBDndvbWVuc19jb2xsZWdlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVI1TFRsaU5GOUJSUkFC4AEA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.srisaradacollege.ac.in/"
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
                src={require("../images/shri-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">
                      Shri Sakthikailash Women's College
                    </h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Military Rd, Salem, Tamil Nadu 636003
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Girls college</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09894034655</span>
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
                  href="https://www.google.com/maps/place/Shri+Sakthikailash+Women's+College+(Arts+and+science)/@11.6646605,78.1481143,14z/data=!4m9!1m2!2m1!1scolleges+in+salem!3m5!1s0x3babf1eb6b593fe1:0x94560ae7354de84a!8m2!3d11.6646605!4d78.1831332!15sChFjb2xsZWdlcyBpbiBzYWxlbVoTIhFjb2xsZWdlcyBpbiBzYWxlbZIBDndvbWVuc19jb2xsZWdlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5YTlZvM1oxTjNFQUXgAQA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.sakthikailashcollege.org/"
                  variant="primary"
                >
                  Visit
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
              <Card.Img
                variant="top"
                src={require("../images/GOV-SALEM.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Government College of Engineering</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      NH 44, Karuppur, Tamil Nadu 636011
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">co-education</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9.30am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272346157</span>
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
                  href="https://www.google.com/maps/place/Government+College+of+Engineering/@11.7127507,78.0707017,15z/data=!4m9!1m2!2m1!1scolleges+in+salem!3m5!1s0x3babfa3400000001:0x786937287cc3f1eb!8m2!3d11.7127507!4d78.0882112!15sChFjb2xsZWdlcyBpbiBzYWxlbVoTIhFjb2xsZWdlcyBpbiBzYWxlbZIBEmdvdmVybm1lbnRfY29sbGVnZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSUGIyTjVlbVpCRUFF4AEA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://gcesalem.edu.in/"
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
                src={require("../images/vsa-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">VSA School of Engineering </h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      NH-47, East Coast Rd, Uthamasolapuram, Tamil Nadu 636010
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">co-education</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272339933</span>
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
                  href="https://www.google.com/maps/place/VSA+School+of+Engineering+%26+School+of+Management/@11.6000399,78.0697515,15z/data=!4m9!1m2!2m1!1scolleges+in+salem!3m5!1s0x3babe50b42eb9e91:0xaf85a212b72b093!8m2!3d11.6000399!4d78.087261!15sChFjb2xsZWdlcyBpbiBzYWxlbVoTIhFjb2xsZWdlcyBpbiBzYWxlbZIBB2NvbGxlZ2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTkpNV1JmTW1aM0VBReABAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.vsagroup.ac.in/"
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
                src={require("../images/mahendra.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Mahendra College of Engineering</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Mahendra - Salem Campus, Salem - Chennai Highway,
                      Minnampalli, Post, Salem, Tamil Nadu 636106
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">co-education</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272482884</span>
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
                  href="https://www.google.com/maps/place/Mahendra+College+of+Engineering/@11.6664975,78.2626891,17z/data=!3m1!4b1!4m5!3m4!1s0x3babf2937d68c3df:0x19f416b5ff839e1f!8m2!3d11.6664975!4d78.2648778"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://mahendracollege.com/"
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
                src={require("../images/salem-clg.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">
                      Salem College of Engineering and Technology
                    </h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      NH-68, Salem-Attur Main Road, Perumapalayam, Salem, Tamil
                      Nadu 636111
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">co-education</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272482555</span>
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
                  href="https://www.google.com/maps/place/Salem+College+of+Engineering+and+Technology/@11.6653125,78.3297599,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x3babf2937d68c3df:0x19f416b5ff839e1f!2sMahendra+College+of+Engineering!8m2!3d11.6664975!4d78.2648778!3m4!1s0x0:0x43315280c31c3ad9!8m2!3d11.6653125!4d78.3319486"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://salemcollege.org/"
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
      <footer className="ro">
        <div>
          <a
            className="insta"
            href="https://instagram.com/_.shutter_eye._?igshid=YmMyMTA2M2Y="
          >
            <Icon.Instagram></Icon.Instagram>
          </a>

          <a className="face" href="">
            <Icon.Facebook></Icon.Facebook>
          </a>

          <a className="link" href="">
            <Icon.Linkedin></Icon.Linkedin>
          </a>

          <a className="what" href="https://t.me/+lDs3sbk5J6tjMTI9">
            <Icon.Telegram></Icon.Telegram>
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Salemcolleges;
