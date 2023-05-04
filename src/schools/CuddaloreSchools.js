import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";

function CuddaloreSchools() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Schools in Cuddalore</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/cuddalore-sch-aristo.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Aristo Public School </h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      APS Avenue, Gedilam Ring Road, Thirupapuliyur, Cuddalore,
                      Tamil Nadu 607002
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">CBSE</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8.30am-6.30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09345695598</span>
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
                  href="https://goo.gl/maps/xUb1hRkpssr9MsnK9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.apsfoundation.in/"
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
                src={require("../images/cuddalore-sch-akshara.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Akshara Vidyaashram</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Unnamalaichetty Chavadi, Chavadi, Kondur, Tamil Nadu
                      607006
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
                    Open Hours : <span className="time">9am-4pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09626260622</span>
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
                  href="https://goo.gl/maps/K2e2msFAwAhXYXJg7"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.Krishnaswamy Vidyanikethanaksharavidyaashram.com/"
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
                src={require("../images/cudd-sch-krish.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Krishnaswamy Vidyanikethan</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      S.Kumarapuram, Marudadu Rd, Cuddalore, Tamil Nadu 607109
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
                    Open Hours : <span className="time">9am-4pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04142290194</span>
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
                  href="https://goo.gl/maps/WTfEJhKGS2dSQLpv6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://kvncbse.com/"
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
                src={require("../images/cudd-sch-ck.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">CK School of Practical Knowledge</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Judge Bungalow Rd, Anna Nagar, Cuddalore, Tamil Nadu
                      607001
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
                    Open Hours : <span className="time">9am–4pm </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04142293747</span>
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
                  href="https://goo.gl/maps/oegaVsLEBpgMatAh6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.ckschool.in/"
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
                src={require("../images/CUDD-SCH-ANNE.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">St. Anne's CBSE School</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      #4, Bharathi Rd, Manjakuppam, Cuddalore, Tamil Nadu 607001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">CBSE</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9AM-4PM</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">07598881083</span>
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
                  href="https://g.page/stannesschool-cuddalore-607001?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.stannesschoolcud.com/"
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
                src={require("../images/cudd-sch-psbb.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">PSBB Millennium School</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      13th cross, Anugraha Satellite Township,
                      Periyakattupalayan,605007
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
                    Open Hours : <span className="time">9am-4pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04132970066</span>
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
                  href="https://goo.gl/maps/aSyvct5Bx6yyr5619"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.psbbmillenniumschool.org/"
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
                src={require("../images/cudd-sch-sbg.JPG")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">SBG Vidhyalaya school</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      99WW+QRV, Thenpathy, Srimushnam, cuddalore,Tamil Nadu
                      608703
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">CBSE</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-4pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04144245088</span>
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
                  href="https://goo.gl/maps/xbiTJX2hLneteNan6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.sbgvidhyalaya.in/"
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
                src={require("../images/cudd-sch-gk.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">GK Matriculation School</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      7GCW+JXQ, Dist, Kattumannarkoil, Tamil Nadu 608301{" "}
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
                    Open Hours : <span className="time">9am-4pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04144260363</span>
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
                  href="https://goo.gl/maps/kwYscnv8MMfGaUW28"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://gkschool.in/"
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
export default CuddaloreSchools;
