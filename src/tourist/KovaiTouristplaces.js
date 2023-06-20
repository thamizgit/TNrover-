import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";

function KovaiTourist() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Tourist Places in Kovai</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img variant="top" src={require("../images/kovaivoc.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">VOC park</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      24, Jail Road, ATT Colony, Gopalapuram, Coimbatore, Tamil
                      Nadu 641018
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Zoo</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">10:30am–5:45am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2239 0261</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Entry Fee : <span className="time">INR 10</span>
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
                  href="https://goo.gl/maps/ThsSwCeUi1kVU9qYA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaikondattam.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Kovai Kondattam</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      2/347, Siruvani Main Rd, Durga nagar, Kalampalayam,
                      Coimbatore, Tamil Nadu 641010
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Theme park</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">10:30am–5:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2260 6852</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Entry Fee : <span className="time">INR 600</span>
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
                  href="https://goo.gl/maps/SKQ8SRex3TXUAo3v9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/kovaigass.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Gass Forest Museum</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      2W8W+J99, Cowley Brown Rd, R.S. Puram, Coimbatore, Tamil
                      Nadu 641002
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Museum</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am–1pm 2–5pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2245 0307</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Entry Fee : <span className="time">INR 40</span>
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
                  href="https://goo.gl/maps/6n4hDZPn61iHui9J7"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaigedee.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">GeDee Car Museum</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      734, Avinashi Rd, Race Course, Coimbatore, Tamil Nadu
                      641018
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Car Museum</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9am–5pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2222 2548</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Entry Fee : <span className="time">INR 100</span>
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
                  href="https://goo.gl/maps/sAtjt2sWSNXhLz7f6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
        
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaisiruvani.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Siruvani Waterfall</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      WMQP+4RC, Noyyal River, Booluvampatti , Coimbatore , Tamil
                      Nadu 641114
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Waterfalls</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">None</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">None</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Entry Fee : <span className="time">INR 50</span>
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
                  href="https://goo.gl/maps/wgZ2JcvbiJom4kAB9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaimasani.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Masaniamman Temple</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      4, Srinivasa Nagar, Uppilipalayam, Coimbatore, Tamil Nadu
                      641015
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
                    Open Hours : <span className="time">5am–9:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">None</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Entry Fee : <span className="time">Free</span>
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
                  href="https://goo.gl/maps/xSpospA1PjaHCkkL7"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/kovailake.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Valankulam Lake</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      65,Sundaresa Iyer Lay Out, Trichy Rd, Highways Colony,
                      Coimbatore 641018
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Boat House</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">6am–7pm</span>
                  </p>
                </Card.Text>

                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">None</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Entry Fee : <span className="time">Free</span>
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
                  href="https://goo.gl/maps/tjPLxbXfUxyc2dDC9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/kovaiblack.jfif")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Black Thunder</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Nagapattinam - Coimbatore - Gundlupet Hwy, Mettupalayam,
                      Tamil Nadu 641305
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Water Theme Park</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9:30am–5:30pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">097891 88866</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Entry Fee : <span className="time">INR 840</span>
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
                  href="https://goo.gl/maps/fNFYt2qBKw8pPuzT7"
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
export default KovaiTourist;
