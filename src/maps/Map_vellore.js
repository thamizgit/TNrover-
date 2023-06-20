import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../module.css";

import Footer from "../footer/Footer";

import Category from "../category/Category";
function Map_vellore() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img
            alt="vellore_map"
              className="img"
              height="650px"
              width="250px"
              src={require("../images/Vellore_taluks.gif")}
            />
          </Col>
          <Col md={6}>
            <h1 className="heading">
              <b>Overview</b>
            </h1>
            <h3 className="adjustm">
              Vellore had the previlege of being the seat of the Pallava, Chola,
              Nayak, Maratha, Arcot Nawabs and Bijapur Sultan Kingdoms. It was
              described as the best and strongest fortress in the Carnatic War
              in the 17th Century. It was witnessed the massacre of European
              soldier during the mutiny of 1806.Vellore district lies between
              12° 15’ to 13° 15’ North latitudes and 78° 20’ to 79° 50’ East
              longitudes in Tamilnadu State. The geographical area of this
              district is 5920.18 sq. k.m. The total population as per 2011
              Census is 39,36,331.Vellore is the Head-Quarters of Vellore
              District which is well connected by Rail and bus routes to major
              towns of the neighbouring states like Andhra Pradesh, Karnataka
              and Kerala. The history of the District assumes a great
              significance and relevance, as we unfold the glorious past. The
              Monuments found in the district give a vivid picture of the town
              through the ages. In the 18th Century Vellore District was the
              scene of some of the decisive battles fought in Ambur 1749 A.D.,
              Arcot 1751 A.D. and Vandavasi 1768 A.D. as a result of the long –
              drawn struggle between the English and the French for Supremacy.
            </h3>
          </Col>
        </Row>
        <br></br>
        <div className="new">
          <h1>Go By Category</h1>
        </div>
        <br></br>
        <Category city={"vellore"}/>
        <br></br>
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
export default Map_vellore;
