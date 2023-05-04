import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function Salemres() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Restaurants in Salem</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/cascade.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">The Cascade</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Devi Chit Fund Complex 5/35 Junction Main Road, 5 Rd, opp.
                      Chenai Silks, Arisipalayam, Salem, Tamil Nadu 636004
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Chinese restaurant </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">7–10:45pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272442505</span>
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
                  href="https://www.google.com/maps/place/The+Cascade/@11.6754342,78.0606226,13z/data=!4m9!1m2!2m1!1ssalem+restaurants!3m5!1s0x3babf045e6b5ef87:0xe13cab28fffdccf0!8m2!3d11.6754342!4d78.1306604!15sChFzYWxlbSByZXN0YXVyYW50c1oTIhFzYWxlbSByZXN0YXVyYW50c5IBEmNoaW5lc2VfcmVzdGF1cmFudOABAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.cascaderestaurant.in/menu/"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/grill-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Grills by the Promenade.</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Radisson Salem Mamangam, Jagir Ammapalayam, Salem, Tamil
                      Nadu 636302
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Vegetarian</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">12–2:30pm, 7–9pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">098424 55820</span>
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
                  href="https://www.google.com/search?q=salem%20top%20restaurants&rlz=1C1YTUH_enIN1009IN1009&oq=salem+top+re&aqs=chrome.0.0i512j69i57j0i22i30l6j0i390l2.6544j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m5!1u2!3m2!2m1!2e8!4e2!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3south_1indian_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3fast_1food_1restaurant!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!2m1!1e2!2m1!1e5!2m1!1e1!2m1!1e3!3sCg8SDXJhdGluZ19maWx0ZXIgASoCSU4,lf:1,lf_ui:9&tbm=lcl&rflfq=1&num=10&rldimm=16230035349718289648&lqi=ChVzYWxlbSB0b3AgcmVzdGF1cmFudHMiA6gBAUiL4tDLn6qAgAhaJxAAEAEQAhgAGAIiFXNhbGVtIHRvcCByZXN0YXVyYW50cyoECAMQApIBEmNoaW5lc2VfcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSaGEzRXlPVGRCUlJBQqoBExABKg8iC3Jlc3RhdXJhbnRzKAA&phdesc=-S3Fi-6dySs&ved=2ahUKEwiJyLuvsN36AhXcTmwGHS79AbcQvS56BAgKEAE&sa=X&rlst=f#rlfi=hd:;si:17942802484629090071,l,ChVzYWxlbSB0b3AgcmVzdGF1cmFudHMiA6gBAUirn4STta6AgAhaJxAAEAEQAhgAGAIiFXNhbGVtIHRvcCByZXN0YXVyYW50cyoECAMQApIBCnJlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUnpjVW8zTlRoUlJSQUKqARMQASoPIgtyZXN0YXVyYW50cygA,y,B1ZbplUiXjc;mv:[[11.7107624,78.17471599999999],[11.3652115,77.88413179999999]]"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://annalakshmichennai.com/menu/"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/barbeque-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Barbeque Nation</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      3rd Floor,Jaykumar Plaza Saradha College, Main, Road,
                      Alagapuram Periyaputhur, Salem, Tamil Nadu 636016
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Restaurant</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8:30am–10pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">08069028762</span>
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
                  href="https://www.google.com/maps/place/Barbeque+Nation/@11.6754342,78.0606226,13z/data=!4m9!1m2!2m1!1ssalem+restaurants!3m5!1s0x3babf0449555cda3:0xa1a3baae18afedb0!8m2!3d11.677087!4d78.1411372!15sChFzYWxlbSByZXN0YXVyYW50c1oTIhFzYWxlbSByZXN0YXVyYW50c5IBE2JhcmJlY3VlX3Jlc3RhdXJhbnTgAQA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.barbequenation.com/restaurants/salem/alagapuram#s-branch-menu-tab"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/mangiamo.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Mangiamo Restaurant</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      603, Junction Main Rd, Kasakaranur, Suramangalam, Salem,
                      Tamil Nadu 636005
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Indian Restaurant</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">12–4pm , 7–11pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272777222</span>
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
                  href="https://goo.gl/maps/eEoPbURoe3tXeeQ76"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://delivery.copperchimney.in/copper-chimney-all-outlets"
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
              <Card.Img
                variant="top"
                src={require("../images/season-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Seasons -All day</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      M4MG+868, Sankagiri Salem Main Road, Mallamooppampatti,
                      Tamil Nadu 636005
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Restaurant</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">12–5pm, 7–10pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">None</span>
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
                  href="https://grandestancia.com/dining.html"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.google.com/maps/place/Seasons+-All+day+Restaurant/@11.6817665,78.0522294,12.48z/data=!4m9!1m2!2m1!1ssalem+restaurants!3m5!1s0x3babf114285239b5:0x7be43e427a10ce2f!8m2!3d11.6832903!4d78.125571!15sChFzYWxlbSByZXN0YXVyYW50c1oTIhFzYWxlbSByZXN0YXVyYW50c5IBCnJlc3RhdXJhbnTgAQA"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/junior.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Junior Kuppanna</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      No-6/94, Greenways Rd, Sinthampalayam, Fairlands, Salem,
                      Tamil Nadu 636016
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Restaurant</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">12–3pm, 7–11pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09489782555</span>
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
                  href="https://www.google.com/maps/place/Junior+Kuppanna/@11.7089545,78.0216288,11.48z/data=!4m9!1m2!2m1!1ssalem+restaurants!3m5!1s0x3babf05ab5799b95:0xb9870cb77acd413a!8m2!3d11.6758677!4d78.1440431!15sChFzYWxlbSByZXN0YXVyYW50c1oTIhFzYWxlbSByZXN0YXVyYW50c5IBF3NvdXRoX2luZGlhbl9yZXN0YXVyYW504AEA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://marina.advantagefoods.in/"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/urban.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Urban Dhaba </h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Radisson Hotel, Mamangam, Jagir Ammapalayam,, Salem, Tamil
                      Nadu 636302
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Thai Restaurant</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">12–3pm , 7–10:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09442700773</span>
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
                  href="https://g.page/benjarong_in?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.dineout.co.in/chennai/benjarong-alwarpet-central-chennai-1657/menu"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/avartana.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Diet Kitchen</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      5/5, Ramakrishna Rd, opp. Gopi Hospital, Hasthampatti,
                      Salem, Tamil Nadu 636007
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">South Indian Restaurant</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">7–11pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04274050558</span>
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
                  href="https://goo.gl/maps/MtAJx6DWj6cpGMa69"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.dietkitchen.in/"
                  variant="primary"
                >
                  Menu
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
export default Salemres;
