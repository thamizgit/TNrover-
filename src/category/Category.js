import {  Row, Col } from "react-bootstrap";
import React from "react";
const Category = () => {
  return (
    <div className="hove">
      <Row>
        <article className="flex-layout">
          <Col className="rest1" md={4}>
            <a href="\cuddalore\hospitals">
              <img
                alt="img"
                src={require("../images/hos.png")}
                width={310}
                height={310}
               
              ></img>
            </a>
            <h2 className="displaymap">Hospitals</h2>
          </Col>
          <Col className="rest1" md={4}>
            <a href="\cuddalore\restaurants">
              <img
                alt="img"
                src={require("../images/res.png")}
                width={310}
                height={310}
              ></img>
            </a>
            <h2 className="displaymap2">Restaurants</h2>
          </Col>
          <Col className="rest1" md={4}>
            <a href="\cuddalore\schools">
              <img
                alt="img"
                src={require("../images/school.png")}
                width={310}
                height={310}
              ></img>
            </a>
            <h2 className="displaymap5">Schools</h2>
          </Col>
        </article>
      </Row>
      <br></br>
      <Row>
        <article className="flex-layout">
        <Col className="rest1" md={4}>
          <a href="\cuddalore\colleges">
            <img
              alt="img"
              src={require("../images/colleges.png")}
              width={310}
              height={310}
            ></img>
          </a>
          <h2 className="displaymap">Colleges</h2>
        </Col>
        <Col className="rest1" md={4}>
          <a href="\cuddalore\tourist">
            <img
              alt="img"
              src={require("../images/tourist.png")}
              width={310}
              height={310}
            ></img>
          </a>
          <h2 className="displaymap3">Tourist Places</h2>
        </Col>
        <Col className="rest1" md={4}>
          <a href="cuddalore\theatres">
            <img
              alt="img"
              src={require("../images/cinema.png")}
              width={310}
              height={310}
            ></img>
          </a>
          <h2 className="displaymap5">Theatres</h2>
          </Col>
          </article>
      </Row>
      <br></br>
      <Row>
        <article className="flex-layout">
        <Col className="rest1" md={4}>
          <a href="\cuddalore\shops">
            <img
              alt="img"
              src={require("../images/shopping.jpg")}
              width={320}
              height={320}
            ></img>
          </a>
          <h2 className="displaymap5">Shopping</h2>
        </Col>
        <Col className="rest1" md={4}>
          <a href="\cuddalore\hotels">
            <img
              alt="img"
              src={require("../images/room.png")}
              width={320}
              height={320}
            ></img>
          </a>
          <h2 className="displaymap6">Hotels</h2>
        </Col>
        <Col className="rest1" md={4}>
          <a href="\cuddalore\functionhalls">
            <img
              alt="img"
              src={require("../images/functionhall.png")}
              width={310}
              height={310}
            ></img>
          </a>
          <h2 className="displaymap3">Function Halls</h2>
          </Col>
          </article>
      </Row>
      <br></br>
    </div>
  );
};
export default Category;
