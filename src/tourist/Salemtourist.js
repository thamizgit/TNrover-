import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";
function Salemtourist() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Spots to Visit in Salem</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img variant="top" src={require("../images/yercaud.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Yercaud</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">Salem,Tamilnadu,636601</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Hill station </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">24 Hours</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Famous : <span className="time">Spices,Coffee</span>
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
                  href="https://www.google.com/maps/place/Yercaud,+Tamil+Nadu+636601/@11.7771485,78.2153029,14.48z/data=!4m5!3m4!1s0x3babf42b4747d5eb:0x1d3ccd9945d5e7ee!8m2!3d11.7747924!4d78.2097052"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.tripadvisor.in/Attraction_Review-g1162345-d1601651-Reviews-Yercaud-Salem_Salem_District_Tamil_Nadu.html"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img variant="top" src={require("../images/mettur.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Mettur Dam</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :<span className="time">Tamil Nadu 636401</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Dam</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9:00 AM - 5:00 PM</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Famous : <span className="time">Muniappan temple</span>
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
                  href="https://www.google.com/maps/place/Mettur+Dam,+Tamil+Nadu+636401/@11.8037584,77.8074214,17z/data=!3m1!4b1!4m5!3m4!1s0x3baeaccb302b3bdd:0x34aca627f141a7c8!8m2!3d11.8037584!4d77.8074214"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.metturdam.com/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/paravasa.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Paravasa Ulagam</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      KK Valasu,Mallur,Salem, Tamil Nadu 636203
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Water Park</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">10am-6pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">08220010017</span>
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
                  href="https://www.google.com/maps/place/Paravasa+Ulagam/@11.5270252,78.1483755,17z/data=!3m1!4b1!4m5!3m4!1s0x3babe8e134bf64a5:0xfd2f5cb1ba22898d!8m2!3d11.5270252!4d78.1505642"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://paravasaulagam.in/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/1008-shiva.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">1008 Lingam Temple</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Ariyanur,salem ,Tamil Nadu 636308
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Temple</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8:00 AM - 8:00 PM</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">093621 04516</span>
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
                  href="https://www.google.com/maps/place/1008+Shiva+Temple+Salem/@11.5969501,78.0784258,17z/data=!4m5!3m4!1s0x3babe509b8ef1ed9:0x29eb52c21e6ce089!8m2!3d11.5969501!4d78.0806145"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.tripadvisor.in/Attraction_Review-g1162345-d4089157-Reviews-1008_Lingam_Temple-Salem_Salem_District_Tamil_Nadu.html"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
        
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kottai-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Sri Kottai Mariamman Koil</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      M535+MMM, Fairlands Main Rd,Salem, Tamil Nadu 636001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Temple</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">5am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">0866 408 9341</span>
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
                  href="https://www.google.com/search?q=kottai+mariamman+kovil+contact+number&source=lmns&bih=656&biw=1536&rlz=1C1YTUH_enIN1009IN1009&hl=en&sa=X&ved=2ahUKEwiixdrA4d36AhXojtgFHUkJAWUQ_AUoAHoECAEQAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.tripadvisor.in/Attraction_Review-g1162345-d4089156-Reviews-Kottai_Mariamman_Temple-Salem_Salem_District_Tamil_Nadu.html"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img variant="top" src={require("../images/temp.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Kailasanathar Temple</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Tharamangalam, Tamil Nadu 636502
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Temple</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">6am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">none</span>
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
                  href="https://www.google.com/maps/place/Kailasanathar+Temple+Tank/@11.6951907,77.9693967,17z/data=!3m1!4b1!4m5!3m4!1s0x3babfdb30db09219:0x43e6ddc3f47a56eb!8m2!3d11.695163!4d77.9716343"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.tripadvisor.in/Attraction_Review-g1162345-d3137312-Reviews-Kailasanathar_Temple-Salem_Salem_District_Tamil_Nadu.html"
                  variant="primary"
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/kiliyurfalls.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Kiliyur Falls</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Q6W2+CF7, Killiyur Road, Pattipadi,yercaud,salem,Tamil
                      Nadu 636601
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Falls</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8pm-4pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Enterence : <span className="time">Free</span>
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
                  href="https://www.google.com/maps/place/Kiliyur+Falls/@11.808252,78.1582467,13.41z/data=!4m12!1m6!3m5!1s0x3babf6766c6e4ffd:0x28d381843a128926!2sKiliyur+Falls!8m2!3d11.7960413!4d78.2011563!3m4!1s0x3babf6766c6e4ffd:0x28d381843a128926!8m2!3d11.7960413!4d78.2011563"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.tripadvisor.in/Attraction_Review-g1009352-d1203660-Reviews-Kiliyur_Falls-Yercaud_Salem_District_Tamil_Nadu.html"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img variant="top" src={require("../images/murugan.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Murugan Temple</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      J4FC+X42, Sandaipet, Kondalampatti, Salem, Tamil Nadu
                      636010
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Temple</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">7–9pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">144 2220 0078</span>
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
                  href="https://www.google.com/maps/place/Murugan+Temple/@11.6248922,78.1180866,17z/data=!3m1!4b1!4m5!3m4!1s0x3babeff189de74cd:0x3c7674f4c8fd0e68!8m2!3d11.6248922!4d78.1202753"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4718358%2C4723331%2C4731329%2C4757164%2C4814050%2C4816977%2C4826689%2C4852066%2C4861688%2C4865307%2C4865466%2C4875646%2C4875647%2C4878212%2C4878214%2C26483161&hl=en-IN&gl=in&ssta=1&dest_mid=%2Fm%2F01jngs&dest_state_type=sattd&dest_src=ts&q&sa=X&ved=2ahUKEwi8_Jjl4t36AhWbUGwGHYM8DFMQ69EBKAB6BAgJEAc"
                  variant="primary"
                >
                  Menu
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
export default Salemtourist;
