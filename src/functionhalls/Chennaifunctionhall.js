import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Chennaifunctionhall() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Function Halls in Chennai</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/SRT.jfif")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">SRI DEVI PALACE</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      119, Vengaivasal Main Road, Santhosapuram, Medavakkam,
                      Chennai 600073
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">Closes 8PM</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">095001 02111</span>
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
                  href="https://www.google.com/maps/dir/11.2738748,77.5965397/top+function+halls+in+chennai/@12.0978219,77.7553196,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a525eb949ab7259:0x6b5486564df77b54!2m2!1d80.1695828!2d12.9127802"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/Banquet.png")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">BANQUET HALL</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      Sulaiman Zackria Avenue, Egmore, Chennai, Tamil Nadu
                      600008
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">24 HRS</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time"> 044 4991 6227</span>
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
                  href="https://www.google.com/maps/dir/11.2738748,77.5965397/top+function+halls+in+chennai/@12.1739501,77.8002101,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5267dca7aa35b3:0xdf13ff1ea1e71f8!2m2!1d80.2514948!2d13.0710088"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/SHREE.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">SHREE HALLS</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      shree halls, T. Nagar, Chennai, Tamil Nadu 600017{" "}
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">24 HRS</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">044 4991 6227</span>
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
                  href="https://www.google.com/maps/dir/11.2738748,77.5965397/top+function+halls+in+chennai/@12.1561598,77.7857433,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5267123f20c597:0x66d0a3d940b6fd8f!2m2!1d80.2299343!2d13.0426058"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/FEATURE.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">FEATHERS CARNATION</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      4/129,mount Poonamallee road, Manapakkam, Ramapuram,
                      Chennai 600089
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">24 HRS</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time"></span>
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
                  href="https://www.google.com/maps/dir/11.2738748,77.5965397/top+function+halls+in+chennai/@12.1576914,77.7959351,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5261e926569c03:0x9130bda95571cf!2m2!1d80.1809363!2d13.0218871"
                  className="locate"
                  variant="primary"
                >
                  Locate
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
              <Card.Img variant="top" src={require("../images/GRANT.JPG")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">THE GRAND PALACE</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      1st to 4th Floor Vinayaga Towers, 58, Jermiah Rd,
                      Purasaiwakkam, Chennai, Tamil Nadu 600007
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">24 HRS</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">044 3510 1112</span>
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
                  href="https://www.google.com/maps/dir/11.2738748,77.5965397/top+function+halls+in+chennai/@12.1783469,77.8010374,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5265e1543b014b:0x2be119194881e9ee!2m2!1d80.2597112!2d13.0873307"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/AR.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">AR GRAND PARTY</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      No.1, Ramachandra Nagar, Sri Ramachandra Nagar, Chennai,
                      Tamil Nadu 6001161
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">24 HRS</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time"></span>
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
                  href="https://www.google.com/maps/dir/11.2738748,77.5965397/top+function+halls+in+chennai/@12.1899251,77.8170934,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5265c886ad4ded:0x593814f6719d5f17!2m2!1d80.2430842!2d13.10136"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/HI.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">HI-TECH HALL</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      7/1,4/1, Royapettah High Rd, Balaji Nagar, Royapettah,
                      Chennai, Tamil Nadu 600014{" "}
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">24 HRS</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">090255 38870</span>
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
                  href="https://www.google.com/maps/dir//top+function+halls+in+chennai/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a5261e5a6aa38bb:0x46ee95db341edf57?sa=X&ved=2ahUKEwjCq9a-nN36AhXJSWwGHSOcBxMQ9Rd6BAgIEAU"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/HAPPY.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-4">HAPPY HALL</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time-1">
                      {" "}
                      No 7, 1st Main Rd, opposite to Sivasakthi Theater Dr,
                      Moorthy Nagar, Padi, Chennai, Tamil Nadu 600050
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">24 HRS</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">094440 63111</span>
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
                  href="https://www.google.com/maps/dir/11.2738748,77.5965397/top+function+halls+in+chennai/@12.1856062,77.7757666,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5263dbedfc2e69:0x4170f2eb4aacafe4!2m2!1d80.1857298!2d13.0948486"
                  className="locate"
                  variant="primary"
                >
                  Locate
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
export default Chennaifunctionhall;
