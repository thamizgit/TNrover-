import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../module.css";
import Footer from "../footer/Footer";
import Category from "../category/Category";
function Map_cuddalore() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img
              className="img"
              height="650px"
              width="250px"
              src={require("../images/Map_cuddalore.png")}
            />
          </Col>
          <Col md={6}>
            <h1 className="heading">
              <b>Overview</b>
            </h1>
            <h3 className="adjustm">
              Welcome to Cuddalore District, Cuddalore District is located in
              the southern Indian state of Tamil Nadu. It is one of the ancient,
              historic district. Present Cuddalore district was newly bifurcated
              from South Arcot district on 30Th September 1993. The city of
              Cuddalore is the district headquarters; The district was named
              after it.In puraana this district is described as part of Sri.
              Rama Khetra. History says in the year 1801 Captain Graham was took
              charge of the District lying between Palar and Portonovo rivers
              and become the first Collector South Arcot. Cuddalore district has
              been classified as a multi-hazard prone district. Since the
              District has a long coastline, therefore the district is
              vulnerable to the cyclonic depressions and the resultant rains
              which causing floods. Cyclones and flood have wreaked havoc in the
              district several times in the past few centuries. Cyclone “ Nisha”
              in 2008 and the cyclone “ Thane “ in December 2011 were caused
              heavy damage to this district in many respect, in recent years.
              This Cuddalore district experienced a worst impacts of Tsunami
              during the year 2004 . The devastation caused by this Tsunami was
              billions of dollars worth infrastructure, economic assets and
              materials, more than this, the proportion of devastated precious
              human loss was more.
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
export default Map_cuddalore;
