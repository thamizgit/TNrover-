import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";

function Cuddaloretheatre() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Theatres in Cuddalore</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/cudd-krishnalaya.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Krishnalaya Theatre</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      PQW5+M2R, Imperial Road, Thirupapuliyur, Cuddalore, Tamil
                      Nadu 600001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Multiplex</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8.30</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04142224454</span>
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
                  href="https://goo.gl/maps/zqmXaG2hw1bPoFqUA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.krishnalayatheatre.in/cities"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/cudd-the-new.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">New Cinema Theatre</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      3, Bharathi Rd, Pudupalayam, Cuddalore, Tamil Nadu 607001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">4K Dolby Atmos</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">7.30am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04142221607</span>
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
                  href="https://g.page/NewCinemas?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.newcinema.co.in/"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/cudd-the-vel.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Velmurugan Theatre</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      PQW5+CGJ, Cuddalore-Virudhachalam-Salem Road,
                      Thirupapuliyur, Cuddalore,607002
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">4K Auro3D 11.1</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">7am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04142224912</span>
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
                  href="https://www.google.com/maps/place/Inox+Cinemas+Salem/@11.6679201,78.0641495,13z/data=!4m9!1m2!2m1!1sth%C3%A9%C3%A2tre+in+Salem,+Tamil+Nadu!3m5!1s0x3babf1501c2c3391:0x6ee2b3cc5a627cb5!8m2!3d11.6744787!4d78.1326021!15sCh50aMOpw6J0cmUgaW4gU2FsZW0sIFRhbWlsIE5hZHWSAQ1tb3ZpZV90aGVhdGVy4AEA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.inoxmovies.com/"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/cudd-the-vijiya.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">VIJAYA THEATRE</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Muslim Karumara St, Kelpattampakkam,
                      Nellikuppam,,Cuddalore , Tamil Nadu 607105
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">single screen</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">8am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09994476421</span>
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
                  href="https://goo.gl/maps/6xgV8BxNrTxwYTm96"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://vijaya-theatre-qube-dts.business.site/?utm_source=gmb&utm_medium=referral"
                  variant="primary"
                >
                  Book
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
export default Cuddaloretheatre;
