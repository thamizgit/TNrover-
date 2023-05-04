import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";

function KovaiColleges() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Colleges in Kovai</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaipsgclg.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">PSG College Of Technology</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Post Box No. 1611, Avinashi Road, Peelamedu, Coimbatore -
                      641004,
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type:{" "}
                    <span className="time">Engineering and Technology</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8am–5pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2257 2177</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/1zf3v1BvAUfHv1Gb9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.psgtech.edu/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/kovaicit.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2 ">CoimbatoreInstitute OfTechnology</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu
                      641014
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type:{" "}
                    <span className="time">Engineering and Technology</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am–5pm 6–9pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2257 4071</span>
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
                  href="https://goo.gl/maps/RVRcFCxDqzA7f3Sh7"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://cit.edu.in/"
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
                src={require("../images/kovaikumara.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">KumaraguruCollege of Technology</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu
                      641049
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type:{" "}
                    <span className="time">Engineering and Technology</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am–5pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2266 1100</span>
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
                  href="https://g.page/KCTcollege?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.kct.ac.in/"
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
                src={require("../images/kovaikrishna.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">SriKrishna College OfTechnology</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      WWHG+28R, Golf Rd, Arivoli Nagar, Vivekanandapuram,
                      Kovaipudur, Tamil Nadu 641042
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type:{" "}
                    <span className="time">Engineering and Technology</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8am–6pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2298 4567</span>
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
                  href="https://goo.gl/maps/L9gqiGDhZixLBpnr9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.skct.edu.in/"
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
              <Card.Img variant="top" src={require("../images/kovaigvt.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">GovernmentCollege of Technology</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Thadagam Main Rd, Tamil Nadu Agricultural University,
                      Coimbatore, Tamil Nadu 641013
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Government Eng. College</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am–4:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2243 2221</span>
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
                  href="https://goo.gl/maps/qj1Wcz3fyHtPuGmg8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://gct.ac.in/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/kovaidr.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Dr.N.G.P. ArtsandScience</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Kalapatti Main Rd, Sharp Nagar, Nehru Nagar West,
                      Coimbatore, Tamil Nadu 641035
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Arts and Science College</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am–5:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2236 9253</span>
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
                  href="https://g.page/DRNGPARTS?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.drngpasc.ac.in/"
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
                src={require("../images/kovaimedicalcenter.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Kovai Medical Center</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      No.940/1A& B, Kovai Estate, Kalapatti Road, Coimbatore,
                      Tamil Nadu 641048
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Medical College</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am–6pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2236 9321</span>
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
                  href="https://g.page/kmcret?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.kmch.ac.in/"
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
                src={require("../images/kovaihindustan.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Hindusthan College ArtsandScience</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Avinashi Rd, behind Nava India, Udayampalayam, Tamil Nadu
                      641028
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Arts and Science College</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">7am–6pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2444 0555</span>
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
                  href="https://g.page/hicascbe?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://hicas.ac.in/"
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
export default KovaiColleges;
