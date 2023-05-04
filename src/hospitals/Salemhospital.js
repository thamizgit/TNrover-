import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function Salemhospital() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Hospitals in Salem</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/Manipal-Salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Manipal Hospitals</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      Dalmia Board, Salem - Bangalore Highway, Vellakalpatti,
                      Salem, Tamil Nadu 636012
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
                    Phone : <span className="time">1800 102 4647</span>
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
                  href="https://www.google.com/maps/place/Manipal+Hospitals+Salem/@11.7009018,77.8473872,11z/data=!4m19!1m13!4m12!1m4!2m2!1d77.5966516!2d11.2738796!4e1!1m6!1m2!1s0x3babfa73ce407e39:0x4959b4b0652d724f!2sManipal+Hospitals+Salem,+Dalmia+Board,+Salem+-+Bangalore+Highway,+Salem,+Tamil+Nadu+636012!2m2!1d78.1027645!2d11.7030185!3m4!1s0x3babfa73ce407e39:0x4959b4b0652d724f!8m2!3d11.7030185!4d78.1027645"
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
                variant="top"
                src={require("../images/shanmuga-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Shanmuga Hospital</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      24, Sarada College Rd, LRN Colony, Chinna Pudur, Salem,
                      Tamil Nadu 636007
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
                    Phone : <span className="time">04272706666</span>
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
                  href="https://www.google.com/maps/place/Shanmuga+Hospital+Pvt+Ltd/@11.6641368,78.1123668,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babf0527af80747:0xb63d6b9a6b60def9!8m2!3d11.6768894!4d78.1530679!15sChNzYWxlbSBob3NwaXRhbCBsaXN0WhUiE3NhbGVtIGhvc3BpdGFsIGxpc3SSAQhob3NwaXRhbLABAOABAA"
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
                src={require("../images/kauvery.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Kauvery Hospital</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      9/50, Trichy Main Rd, M G R Nagar, Seelanaickenpatti,
                      Salem, Tamil Nadu 636201
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
                    Phone : <span className="time">09384845708</span>
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
                  href="https://www.google.com/maps/place/Kauvery+Hospital/@11.6716381,78.0568215,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babefce5942c6ef:0x10c47c95ab959427!8m2!3d11.6290236!4d78.1488717!15sChNzYWxlbSBob3NwaXRhbCBsaXN0WhUiE3NhbGVtIGhvc3BpdGFsIGxpc3SSARBwcml2YXRlX2hvc3BpdGFssAEA4AEA"
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
              <Card.Img variant="top" src={require("../images/dharan.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Dharan Hospital</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      14, byepass, Selva Nagar, Chinnusamy Nagar,
                      Seelanaickenpatti, Salem, Tamil Nadu 636201
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
                    Phone : <span className="time">04272709999</span>
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
                  href="https://www.google.com/maps/place/Dharan+Hospital/@11.6252594,78.0751244,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babefc8a8dff6cf:0xe9508b7c85a684cf!8m2!3d11.6252594!4d78.1451622!15sChNzYWxlbSBob3NwaXRhbCBsaXN0WhUiE3NhbGVtIGhvc3BpdGFsIGxpc3SSARBwcml2YXRlX2hvc3BpdGFssAEA4AEA"
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
          <Col md={3}>
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/pranav-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-3">PRANAV HOSPITAL</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      108/38 Brindavan Road,fairlands, Salem, Tamil Nadu 636004
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
                    Phone : <span className="time">04272336787</span>
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
                  href="https://www.google.com/maps/place/Pranav+Hospital/@11.6717305,78.0838174,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babf046668d7e13:0x97fa01f9e8e34e24!8m2!3d11.6693201!4d78.1426459!15sChNzYWxlbSBob3NwaXRhbCBsaXN0WhUiE3NhbGVtIGhvc3BpdGFsIGxpc3SSARBwcml2YXRlX2hvc3BpdGFssAEA4AEA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/spmm-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">SPMM Hospital</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time-1">
                      {" "}
                      29, Cuddalore Main Rd, Ammapet, Salem, Tamil Nadu,
                      Pincode:636003
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
                    Phone : <span className="time">04272244500</span>
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
                  href="https://www.google.com/maps/place/SPMM+Hospital/@11.6717305,78.0838174,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babf1f18ac3c455:0xbda8bd4f4518ffad!8m2!3d11.6612384!4d78.1920086!15sChNzYWxlbSBob3NwaXRhbCBsaXN0WhUiE3NhbGVtIGhvc3BpdGFsIGxpc3SSARBwcml2YXRlX2hvc3BpdGFssAEA4AEA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/kurinji-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Kurinji Hospital</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time-1">
                      {" "}
                      Teejay Road, 5 Rd, near gujarathi kalyana mandapam, Salem,
                      Tamil Nadu 636016
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
                    Phone : <span className="time">04272433300</span>
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
                  href="https://www.google.com/maps/place/Kurinji+Super+Specialities+Hospital+Salem/@11.6344582,78.0540631,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babf05d15bf3dc1:0x56cfb7067b84ce81!8m2!3d11.6770989!4d78.1353645!15sChNzYWxlbSBob3NwaXRhbCBsaXN0WhUiE3NhbGVtIGhvc3BpdGFsIGxpc3SSARBnZW5lcmFsX2hvc3BpdGFssAEA4AEA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/itech-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-4">iTECH MULTI SPECIALITY HOSPITAL</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      214, 2nd Agraharam, I Agraharam, Salem, Tamil Nadu 636001
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
                    Phone : <span className="time">07603837607</span>
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
                  href="https://www.google.com/maps/place/iTECH+MULTI+SPECIALITY+HOSPITAL/@11.6344582,78.0540631,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babf141d9adddf3:0x318068c0f9b725dc!8m2!3d11.6574574!4d78.1658551!15sChNzYWxlbSBob3NwaXRhbCBsaXN0kgEIaG9zcGl0YWzgAQA"
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
          <Col md={3}>
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/london.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">London Ortho Hospital</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time-2">
                      55, Omalur Main Rd, Rathinasamypuram, Salem, Tamil Nadu
                      636009
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
                    Phone : <span className="time">04272353033</span>
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
                  href="https://www.google.com/maps/place/London+Ortho+Specialty+Hospital/@11.659809,78.0807831,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babf03401c9f5af:0x5714b8691ae5ac42!8m2!3d11.659809!4d78.1508209!15sChNzYWxlbSBob3NwaXRhbCBsaXN0WhUiE3NhbGVtIGhvc3BpdGFsIGxpc3SSAQhob3NwaXRhbLABAOABAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/ammani.JPG")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-4">Ammani Hospitals</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      130, Gandhi Rd, Hasthampatti, Salem, Tamil Nadu 636016
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
                    Phone : <span className="time">04272314142</span>
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
                  href="https://www.google.com/maps/place/Ammani+Hospitals/@11.659809,78.0807831,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babf06a68c32e41:0xf4828abb7b85781b!8m2!3d11.6717432!4d78.1562451!15sChNzYWxlbSBob3NwaXRhbCBsaXN0WhUiE3NhbGVtIGhvc3BpdGFsIGxpc3SSAQhob3NwaXRhbLABAOABAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/nanthan.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Nathan Hospital</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      1-10, Advaitha Ashram Rd, Fairlands, Salem, Tamil Nadu
                      636016
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
                    Phone : <span className="time">099 4102 2244</span>
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
                  href="https://g.page/kedarmain?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/nfh-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-4">Neuro Foundation Hospital, Salem</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time-1">
                      Three Roads, Meyyanur Main Rd, Salem, Tamil Nadu 636009
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
                    Phone : <span className="time">18001031014</span>
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
                  href="https://www.google.com/maps/place/Neuro+Foundation+Hospital,+Salem/@11.6744508,78.0718306,13z/data=!4m9!1m2!2m1!1ssalem+hospital+list!3m5!1s0x3babf015356ab76f:0xf0fdf848db682c97!8m2!3d11.6642546!4d78.1321373!15sChNzYWxlbSBob3NwaXRhbCBsaXN0kgEIaG9zcGl0YWzgAQA"
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
export default Salemhospital;
