import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";

function Salemschools() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid >
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Schools in Salem</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="between" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card  className="card" style={{ width: "350px",margin:"2rem auto"}}>
              <Card.Img 
                variant="top"
                src={require("../images/holy-salem.JPG")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Holy Angels' Public School</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      MG Road Alagapuram, Village, Fairlands, Salem, Tamil Nadu
                      636016
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
                    Open Hours : <span className="time">9.30am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272447189</span>
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
                  href="15sChVzYWxlbSB0b3Agc2Nob29sIGxpc3RaFyIVc2FsZW0gdG9wIHNjaG9vbCBsaXN0kgEWZ2lybHNfc2Vjb25kYXJ5X3NjaG9vbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSMWRqaERkV1JCRUFF4AEA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.holyangelssalem.org/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} lg={5} xl={4} xxl={3  } className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/royal-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Royal Park School (CBSE)</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      Chennai By-Pass Road Kumaragiri, South, Ammapet, Salem,
                      Tamil Nadu 636015
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
                    Open Hours : <span className="time">9am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09092299966</span>
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
                  href="https://www.google.com/maps/place/Royal+Park+School+(CBSE)/@11.650677,77.9065646,11z/data=!4m9!1m2!2m1!1ssalem+top+school+list!3m5!1s0x3babf1e474453943:0x65206b69ccb7e47f!8m2!3d11.650677!4d78.186716!15sChVzYWxlbSB0b3Agc2Nob29sIGxpc3RaFyIVc2FsZW0gdG9wIHNjaG9vbCBsaXN0kgELY2JzZV9zY2hvb2yaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXlOVmxJUTJGM0VBReABAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://royalparkschool.com/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} lg={5} xl={4} xxl={3  }  className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/notre-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Notre Dame of HolyCross School</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      M67C+642, Gundukallur Rd, Near Vinayagar Kovil,
                      Gundukallur, Udayapatti, Salem, Tamil Nadu 636140
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
                    Open Hours : <span className="time">9am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04272241800</span>
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
                  href="https://www.google.com/maps/place/Notre+Dame+of+HolyCross+School/@11.6630108,77.94012,11z/data=!4m9!1m2!2m1!1ssalem+top+school+list!3m5!1s0x3babf2146dce5d15:0x3f39c34b277437cf!8m2!3d11.6630108!4d78.2202714!15sChVzYWxlbSB0b3Agc2Nob29sIGxpc3RaFyIVc2FsZW0gdG9wIHNjaG9vbCBsaXN0kgELY2JzZV9zY2hvb2yaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUlhYMHhxUjFkbkVBReABAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.notredamehcs.org/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} lg={5} xl={4} xxl={3  }  className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/senthil-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Senthil Public School</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Ponkumar Mines Rd, Mamangam, Salem, Tamil Nadu 636012
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
                    Open Hours : <span className="time">9am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09578221888</span>
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
                  href="15sChVzYWxlbSB0b3Agc2Nob29sIGxpc3RaFyIVc2FsZW0gdG9wIHNjaG9vbCBsaXN0kgELY2JzZV9zY2hvb2yaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUjFkQzB0ZVMxQlJSQULgAQA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.senthilgroupofschools.in/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        
          <Col  md={5} lg={5} xl={4} xxl={3 } className="zoom">
            <Card className="card" style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/emerald-salem.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">EMERALD VALLEY PUBLIC SCHOOL</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Adivaram Rd, Yercaud Foot Hills, Kondappanaickenpatti,
                      Salem, Tamil Nadu 636008
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
                    Open Hours : <span className="time">9.30am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">080 6902 8724</span>
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
                  href="https://www.google.com/maps/place/EMERALD+VALLEY+PUBLIC+SCHOOL/@11.631191,77.8851987,11z/data=!4m9!1m2!2m1!1ssalem+top+school+list!3m5!1s0x3babf1412c3cd18b:0xfe5c98dc086f5976!8m2!3d11.7163378!4d78.1826274!15sChVzYWxlbSB0b3Agc2Nob29sIGxpc3RaFyIVc2FsZW0gdG9wIHNjaG9vbCBsaXN0kgELY2JzZV9zY2hvb2yaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmxPVmt0VlV0bkVBReABAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://evps.edu.in/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} lg={5} xl={4} xxl={3  }  className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img variant="top" src={require("../images/montfort.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Montfort School</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Q6F6+25Q,near Yercaud main lake Yercaud, Tamil Nadu 636602
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
                    Open Hours : <span className="time">9.30am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04281222428</span>
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
                  href="https://www.google.com/maps/place/Montfort+School/@11.7725852,78.2083008,17z/data=!3m1!4b1!4m5!3m4!1s0x3babf42c3fbf0e8b:0x107f498700f86049!8m2!3d11.7725985!4d78.2104627"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.montfortyercaud.com/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col  md={5} lg={5} xl={4} xxl={3 }  className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/holy-girl.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">
                      Holy Angels' Girls Matric Hr.Sec.School
                    </h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Convent Rd, Fairlands, Salem, Tamil Nadu 636016
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Girls school</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours : <span className="time">9.30am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09150097990</span>
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
                  href="https://www.google.com/maps/place/Holy+Angels'+Girls+Matric+Hr.Sec.School/@11.6807207,78.143992,17z/data=!3m1!4b1!4m5!3m4!1s0x3babf0f897002383:0x18ac04eae495f3b9!8m2!3d11.6807207!4d78.1461807"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://holyangelsmatricsalem.edu.in/"
                  variant="primary"
                >
                  Visit
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col  md={5} lg={5} xl={4} xxl={3 }  className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img variant="top" src={require("../images/arise.jpg")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">ARISE SCHOOL</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      M4QH+RVM, Perumal Malai Rd, Narasothipatti, Salem, Tamil
                      Nadu 636004
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
                    Open Hours : <span className="time">9.30am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">144 2220 0000</span>
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
                  href="https://www.google.com/maps/place/ARISE+SCHOOL/@11.6924793,77.7844168,11z/data=!4m9!1m2!2m1!1ssalem+top+school+list!3m5!1s0x3babf1b059134ca5:0xb83bac2c48cfac05!8m2!3d11.6895817!4d78.1296992!15sChVzYWxlbSB0b3Agc2Nob29sIGxpc3SSAQtjYnNlX3NjaG9vbOABAA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://arisesalem.com/"
                  variant="primary"
                >
                  Visit
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
export default Salemschools;
