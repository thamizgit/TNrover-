import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "../navbar/Navbar";

import Footer from "../footer/Footer";

function MaduraiTheatres() {
  return (
    <div>
      <Navbar />

      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Theatres in Madurai</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraivetri.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Vetri Cinemas</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Avaniyapuram Main Road, Villapuram, Aruppukottai Rd, TNHB
                      Colony, Madurai 625012
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-11pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">81444 14434</span>
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
                  href="https://goo.gl/maps/9tk6GWjQt2Wm6gXXA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="http://www.vetricinemas.in/"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraijazz.png")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">JAZZ & ARSH</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      5, 80 Feet Rd, Deputy Collector Colony, k.k.nagar,
                      Madurai, Tamil Nadu 625020
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-1am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">81444 14434</span>
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
                  href="https://goo.gl/maps/mmiktKuQzBRv7KWs8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://paytm.com/movies/madurai/jazz-and-arsh-cinemas-a-c-4k-madurai-c/10281"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraiinox.jfif")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">INOX</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Vishaal De Mall, No. 31, 5th Floor, Gokhale Rd, Chinna
                      Chokikulam, Tamil Nadu 625002
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-1am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">080988 81242</span>
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
                  href="https://goo.gl/maps/UTL3NpogCWedW2bX8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://paytm.com/movies/madurai/inox-vishaal-de-mall-madurai-c/60"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraiamirtha.jpeg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Amirtham Cinema</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      W458+J5V, Bus Stop South Veli Street, behind Sappani
                      Kovil, Madurai, Tamil Nadu 625001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-11pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">90927 44273</span>
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
                  href="https://goo.gl/maps/MG4p9ZcFijKxZq9o7"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://in.bookmyshow.com/madurai/cinemas/amirtham-cinema-ac-4k-madurai/ADDX"
                  variant="primary"
                >
                  Book
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
                src={require("../images/maduraigopuram.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Gopuram Cinemas</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      50 Feet Road, Near By Sri Power Point, Sellur, North,
                      Madurai.
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-11pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">075400 65553</span>
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
                  href="https://goo.gl/maps/QTmfD8mc7YVKAwZQA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="http://www.pvrcinemas.com/"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraimidland.jfif")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Midlaand Cinemas</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      106/2, Sammattipuram Main Rd,Kalimuthu Nagar, HMS Colony,
                      Ponmeni, Madurai 625016
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-1am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">090479 04704</span>
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
                  href="https://goo.gl/maps/n4MCwXgaYTPVT42a8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://midlaand-cinemas.business.site"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraicinipriya.jfif")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Cinipriya</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      W4FR+H8V, Kuruvikkaran Salai, Gandhi Nagar, Shenoy Nagar,
                      Madurai 625020
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-11pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">81444 14434</span>
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
                  href="https://goo.gl/maps/1xrW4orTsU5wKH6v6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://in.bookmyshow.com/madurai/cinemas/priya-complex-dolby-atmos-madurai/PCDA"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraisdc.jfif")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">SDC Cinemas</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      47, Traveler's Bunglow
                      Road,Mahapupalayam,Arasaradi,Madurai 625016
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am-1am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">81444 14434</span>
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
                  href="https://goo.gl/maps/N8f6i2stPRsuAGgV9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://in.bookmyshow.com/madurai/cinemas/sdc-cinemas-solamalai-ac-sony-4k-madurai/SSMC"
                  variant="primary"
                >
                  Book
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
export default MaduraiTheatres;
