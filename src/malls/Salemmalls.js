import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";

function Salemmalls() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Malls in salem</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:'2rem auto' }}>
              <Card.Img
                variant="top"
                src={require("../images/salem-rel.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Reliance Mall</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      No 229/1 Five Road Junction, Block No 5, Meyyanur, Salem,
                      Tamil Nadu 636004
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8.30am-7pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">18001027382</span>
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
                  href="https://www.google.com/maps/place/Reliance+Mall/@11.6647139,78.1092781,13z/data=!4m9!1m2!2m1!1smalls+in+salem!3m5!1s0x3babf196c628c5df:0xff558fefcab0e53!8m2!3d11.6748136!4d78.1325163!15sCg5tYWxscyBpbiBzYWxlbVoQIg5tYWxscyBpbiBzYWxlbZIBD3Nob3BwaW5nX2NlbnRlcuABAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.relianceretail.com/RelianceMall/?utm_source=locator&utm_medium=googleplaces"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:'2rem auto' }}>
              <Card.Img
                variant="top"
                src={require("../images/salem-nirmala.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Nirmal Skywin Mall</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      95, Rajaji Rd, Peramanur, Salem, Tamil Nadu 636007
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8am-8pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">088076 17488</span>
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
                  href="https://www.google.com/maps/place/Nirmal+skywin+shopping+mall/@11.671313,78.1339189,14z/data=!4m9!1m2!2m1!1sNirmal+Skywin+Mall!3m5!1s0x3babf11a5866d685:0x1ab1c822e6f0a2b2!8m2!3d11.6673937!4d78.1497039!15sChJOaXJtYWwgU2t5d2luIE1hbGxaFCISbmlybWFsIHNreXdpbiBtYWxskgEPc2hvcHBpbmdfY2VudGVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVIxY0RSNWQyVm5FQUXgAQA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.justdial.com/Salem/Nirmal-Skywin-Shopping-Mall-Near-Vijaya-Hospital-Peramanur/0427PX427-X427-141016194532-R9J2_BZDET"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:'2rem auto' }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/salem-kandaswarna.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Kandaswarna Mega Mall</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      26, Sarada College Rd, Fairlands,Tamil Nadu 636016
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">6:30am–11pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time"> 0427 404 0335</span>
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
                  href="https://www.google.com/maps/place/Kandaswarna+Mega+Mall/@11.6765544,78.1392281,15z/data=!3m1!4b1!4m5!3m4!1s0x3babf051d4f58a2f:0x2de01240ad829dcd!8m2!3d11.6765335!4d78.1479614"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.justdial.com/Salem/Kandaswarna-Shopping-Mall-Fair-Lands/0427PX427-X427-160629153602-W1P9_BZDET"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:'2rem auto' }}>
              <Card.Img
                variant="top"
                src={require("../images/salem-pothys.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2"> Pothy's Mall</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      4, Omalur Main Road, TVS Bus Stop, near New Bus Stand,
                      Salem, Tamil Nadu 636009
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8.30am-9.30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272666000</span>
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
                  href="https://www.google.com/maps/place/POTHYS+Salem/@11.6679995,78.1340089,15z/data=!4m5!3m4!1s0x3babfa3a77a5f633:0x237816cf9b62d73e!8m2!3d11.6660565!4d78.1442491"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.google.com/aclk?sa=l&ai=DChcSEwibveXNsd_6AhWSmmYCHRR9CRIYABAAGgJzbQ&sig=AOD64_37KeUGbpr6PbDx_ldS1BffpyB65g&q&adurl&ved=2ahUKEwjrlN3Nsd_6AhW7hGMGHft4D4IQ0Qx6BAgKEAE"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
        
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:'2rem auto' }}>
              <Card.Img
                variant="top"
                src={require("../images/salem-dmart.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">D Mart</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Omalur Main Road, near Five Roads, Narasothipatti, Salem,
                      Tamil Nadu 636004
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time"></span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8am-10pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272332350</span>
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
                  href="https://www.google.com/maps/place/D+Mart/@11.6786306,78.1237203,15z/data=!4m5!3m4!1s0x3babf0679a0a699f:0xe48fba14a6323e8e!8m2!3d11.6786312!4d78.1324743"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.dmartindia.com/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:'2rem auto' }}>
              <Card.Img
                variant="top"
                src={require("../images/salem-avr1.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">AVR Swarna Mahal Jewellers</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      39, College Ln, Thousand Lights West, Nungambakkam,
                      Chennai, Tamil Nadu 600006
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-9pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272333307</span>
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
                  href="https://www.google.com/maps/place/AVR+Swarna+Mahal+Jewellers/@11.671032,78.1290589,15z/data=!4m12!1m6!3m5!1s0x3babf043c2ebf22f:0x7ec408efebc09ac6!2sAVR+Swarna+Mahal+Jewellers!8m2!3d11.6709795!4d78.1377968!3m4!1s0x3babf043c2ebf22f:0x7ec408efebc09ac6!8m2!3d11.6709795!4d78.1377968"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://avrswarnamahal.com/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:'2rem auto' }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/salem-trends.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">TRENDS WOMAN</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Ground Floor, No 252 NM Arcade, Meyyanur Bypass Rd, opp.
                      ARRS MULTIPLEX, Salem, Tamil Nadu 636004
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-9.30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272905164</span>
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
                  href="https://www.google.com/maps/place/TRENDS+WOMAN/@11.6710738,78.1290589,15z/data=!4m9!1m2!2m1!1strends+women!3m5!1s0x3babf1b4b8584987:0xe9a84d85e1c5e8a0!8m2!3d11.6676241!4d78.1345493!15sCgx0cmVuZHMgd29tZW5aDiIMdHJlbmRzIHdvbWVukgEOY2xvdGhpbmdfc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUnRNalpEVkRkblJSQULgAQA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://trends.ajio.com/"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:'2rem auto' }}>
              <Card.Img
                variant="top"
                src={require("../images/salem-chennai.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">The Chennai Silks - Salem</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      293, Junction Main Rd, Meyyanur, Salem, Tamil Nadu 636004
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">7–11pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272332888</span>
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
                  href="https://www.google.com/maps/place/The+Chennai+Silks+-+Salem/@11.676072,78.1221622,15z/data=!4m5!3m4!1s0x3babf067d4c9c591:0x4e064fdd29d795b3!8m2!3d11.6760721!4d78.1308955"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.thechennaisilks.com/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
      <Row className="fol" justify="around">
        <Col md={12} className="head">
          <h2>Follow Us For More Information</h2>
        </Col>
      </Row>
      </Container>
      
      <Footer />
    </div>
  );
}
export default Salemmalls;
