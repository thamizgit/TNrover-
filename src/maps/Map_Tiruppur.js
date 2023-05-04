import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../module.css";
import * as Icon from "react-bootstrap-icons";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import Footer from "../footer/Footer";
import Category from "../category/Category";
function Map_Tiruppur() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img
              className="img"
              height="650px"
              width="250px"
              src={require("../images/tirupur.jpg")}
            />
          </Col>
          <Col md={6}>
            <h1 className="heading">
              <b>Overview</b>
            </h1>
            <h3 className="adjustm">
              During 1990’s, Exports have been increased tremendously in
              Tiruppur Area and the infrastructure and other basic amenities
              available is not enough for fast growth city like Tiruppur.
              Therefore, The people of the region demanded Separate Corporation
              and District for Tiruppur to fulfill the aspiration of the people
              in the region. The Hon’ble Chief Minister had accepted the views
              of the people and industrialist during inauguration of Tiruppur
              municipal corporation and agreed that very soon the New District
              will be formed. Subsequently the Hon’ble Finance Minister
              announced in the floor of assembly that a separate Tiruppur
              District will be formed.Accordingly the Government have issued
              G.O.Ms.No.617 and 618, Revenue [R.A.1(1)] Department, Dated
              24.10.2008 to bring district administration closer to be people
              and to fulfill the aspiration of industrialist by reorganizing
              Coimbatore and Erode Districts into Coimbatore, Erode and Tiruppur
              Districts.
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
export default Map_Tiruppur;
