import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
function KovaiTheatres() {
  return (
    <div>
      <Navbar />

      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Theatres in Kovai</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaiinox.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">INOX Prozone</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      S.F, 201, Sathy Rd, Ganapathy Maa Nagar, Coimbatore, Tamil
                      Nadu 641035
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
                    Phone : <span className="time">042 2297 9222</span>
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
                  href="https://goo.gl/maps/veSFTrbZHvNB4Cqi7"
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

          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/kovaikg.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">KG Cinemas</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      3, Race Course Rd, Race Course, Gopalapuram, Coimbatore,
                      Tamil Nadu 641018
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
                  href="https://goo.gl/maps/BMjhsnhLQnwNeEiz6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://in.bookmyshow.com/coimbatore/cinemas/kg-cinemas-coimbatore/KGCM"
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
                src={require("../images/kovaikrithika.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Krithika Cinemas</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Thadagam Main Rd, Edayarpalayam, Coimbatore, Tamil Nadu
                      641025
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
                    Phone : <span className="time">142 2451 9221</span>
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
                  href="https://goo.gl/maps/jNtMB1MdFGeTqPi78"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://in.bookmyshow.com/buytickets/krithika-cinemas-2k-3d-a-c-coimbatore/cinema-coim-KRCC-MT/"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img variant="top" src={require("../images/kovaisrk.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">SRK Miraj</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Sri Hari Mills, Kamachipuram, Coimbatore, Tamil Nadu
                      641016
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
                    Phone : <span className="time">180 0120 3699</span>
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
                  href="https://goo.gl/maps/Y4C19VkdWMGSLt5K8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="http://www.mirajgroup.in/businesses/entertainment.html"
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
              <Card.Img variant="top" src={require("../images/kovaisdc.jpg")} />
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
                      2WWW+38G, Koundampalayam, Coimbatore, Tamil Nadu 641030
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
                    Phone : <span className="time">042 2452 9096</span>
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
                  href="https://goo.gl/maps/KxUuFRrJE1nDoZBz9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://in.bookmyshow.com/coimbatore/cinemas/sdc-cinemas-kalpana-theatre-4k-dolby-atmos/SDKT"
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
                src={require("../images/kovaimurugan.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Murugan Cinemas</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      3WHR+3R9, Nagapattinam Gundlupet Hwy, Cheran Colony,
                      Thudiyalur, Tamil Nadu 641029
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
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/oqk2QXhJvm9FFcnM8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://in.bookmyshow.com/buytickets/murugan-cinemas-ac-4k-atmos-thudiyalur/cinema-coim-MCTC-MT/20221130"
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
                src={require("../images/kovaiarasan.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Arasan Cinemas</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      231 , Sundarapuram , Sarada Mill Rd, Podanur ,Coimbatore
                      Tamil Nadu 641023
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
                    Phone : <span className="time">86532 47809</span>
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
                  href="https://goo.gl/maps/JnsDv4Ri51veEQ4n6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://in.bookmyshow.com/buytickets/arasan-cinemas-ac-4k-dolby-coimbatore/cinema-coim-ASCC-MT/20221130"
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
                src={require("../images/kovaisenthil.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Senthil Kumaran</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Ambal Complex, 109, Gokhale St, Ram Nagar, Coimbatore,
                      Tamil Nadu 641009
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
                    Phone : <span className="time">042 2223 3688</span>
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
                  href="https://goo.gl/maps/UZ1wYNveTVpBcabF6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
                <Button
                  className="menu"
                  href="https://www.senthilkumarantheatres.com/"
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
export default KovaiTheatres;
