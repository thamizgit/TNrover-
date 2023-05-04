import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../module.css";
import "../hospitals/Salemhospital.js";
import "../restaurants/Salemres.js";
import "../schools/Salemschool.js";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import Category from "../category/Category";
function Map_salem() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img
              className="img"
              height="650px"
              width="250px"
              src={require("../images/salem_map.jpg")}
            />
          </Col>
          <Col md={6}>
            <h1 className="heading">
              <b>Overview</b>
            </h1>
            <h3 className="adjustm">
              Salem District is one of the 38 districts of Tamil Nadu state in
              southern India. The district is now divided into Dharmapuri,
              Krishnagiri, Namakkal as individual districts. Salem is the
              district headquarters and other major towns in the district
              include Mettur, Thammampatti, Attur, Omalur, Sankagiri and
              Edappadi. That Salem dates to at least two thousand years ago is
              evident from the discovery of silver coins from the Roman Emperor
              Nero Claudius Caesar Augustus Germanicus (37–68 CE) found by
              Koneripatti of Salem in 1987. It was ruled by Mazhavar King Kolli
              Mazhavan and kings Adhiyaman and Valvil Ori of Sangam age. It is
              part of Mazhanadu, a vast region that dates to the 2nd century
              BCE. Salem was the largest district of Tamil Nadu. It was
              bifurcated into Salem and Dharmapuri districts in 1965 and
              Namakkal district in 1997. Now Salem has been developed a lot by
              building many bridges and is considered to be the smart city.
              Salem is famous for cultivating mangoes.{" "}
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
    </div>
  );
}
export default Map_salem;
