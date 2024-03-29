import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../module.css";
import "../hospitals/Chennaihospital.js";
import Footer from "../footer/Footer";
import Category from "../category/Category";
function Map() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img
            alt="chennai_map"
              className="img"
              height="auto"
              src={require("../images/chennaimap.jpg")}
            />
          </Col>
          <Col md={6}>
            <h1 className="heading">
              <b>Overview</b>
            </h1>
            <h3 className="adjustm">
              Chennai also known as Madras[A] (the official name until 1996), is
              the capital city of the Indian state of Tamil Nadu. The state's
              largest city in area and population as well, Chennai is located on
              the Coromandel Coast of the Bay of Bengal, and is the most
              prominent cultural, economic and educational centre of South
              India. According to the 2011 Indian census, Chennai is the
              sixth-most populous city in the country and forms the fourth-most
              populous urban agglomeration. The Greater Chennai Corporation is
              the civic body responsible for the city; it is the oldest city
              corporation of India, established in 1688—the second oldest in the
              world after London. The city of Chennai is coterminous with
              Chennai district, which together with the adjoining suburbs
              constitutes the Chennai Metropolitan Area, the 36th-largest urban
              area in the world by population and one of the largest
              metropolitan economies of India. Chennai is ranked as a beta-level
              city in the Global Cities Index, and was ranked the best city in
              India by India Today in the 2014 annual Indian city survey. In
              2015 Chennai was named the "hottest" city (city worth visiting and
              worth living in for long term) by the BBC, citing the mixture of
              both modern and traditional values. National Geographic mentioned
              Chennai as the only South Asian city to feature in its 2015 "Top
              10 food cities" list. Chennai was also named the ninth-best
              cosmopolitan city in the world by Lonely Planet. In October 2017,
              Chennai was added to the UNESCO Creative Cities Network (UCCN)
              list for its rich musical tradition. More than one-third of
              India's automobile industry is based in the city. Home to the
              Tamil film industry, Chennai is also known as a major film
              production centre. It is one of the 100 Indian cities to be
              developed as a smart city under the Smart Cities Mission.
            </h3>
          </Col>
        </Row>
        <br></br>
        <div className="new">
          <h1>Go By Category</h1>
        </div>
        <br></br>
        <Category city="chennai"/>
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
export default Map;
