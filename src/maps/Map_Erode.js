import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../module.css";
import Footer from "../footer/Footer";
import Category from "../category/Category";
function Map_Erode() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img
              className="img"
              height="650px"
              width="250px"
              src={require("../images/Erode.png")}
            />
          </Col>
          <Col md={6}>
            <h1 className="heading">
              <b>Overview</b>
            </h1>
            <h3 className="adjustm">
              Erode District lies on the extreme north of Tamil Nadu. It is
              bounded mostly by Karnataka State and also River Palar covers
              pretty long distance. To the East lies Namakkal and Karur
              Districts. Dindigal District is its immediate neighbour to the
              South and on the West, it has Coimbatore and Nilgiri Districts, as
              its boundaries. Thus Erode District is essentially a land-locked
              area having no sea-cost of its own. Erode District situated at
              between 10 36” and 11 58” North Latitude and between 76 49” and 77
              58” East Longitude.The region comprised in the district can be
              portrayed as a long undulating plain gently sloping towards the
              river Cauvery in the south-east. The two major tributaries of
              river Cauvery viz. Bhavani and Noyyal drain the long stretch of
              mountains in the north. A part of the eastern boundary of the
              district is formed by river Cauvery, entering the district from
              Salem and flowing in a southern direction..
            </h3>
          </Col>
        </Row>
        <br></br>
        <div className="new">
          <h1>Go By Category</h1>
        </div>
        <br></br>
        <Category />
        <br></br>
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
export default Map_Erode;
