import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../module.css";
import Footer from "../footer/Footer";
import Category from "../category/Category";
function Map_Nilgiris() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img alt='nilgiris_map'
              className="img"
              height="650px"
              width="250px"
              src={require("../images/map.png")}
            />
          </Col>
          <Col md={6}>
            <h1 className="heading">
              <b>Overview</b>
            </h1>
            <h3 className="adjustm">
              The Nilgiris, because of its natural charm and pleasant climate,
              was a place of Special attraction for the Europeans. In 1818, Mr.
              Whish and Kindersley, who were assistants to the Collector of
              Coimbatore, discovered the place Kotagiri near Rengaswamy peak.
              John Sullivan, the then Collector of Coimbatore was greatly
              interested in this part of the country. He established his
              residence there and reported to the Board of Revenue on 31st July
              1819.The Name ‘Nilgiris’ means Blue hills (Neelam – Blue and giri
              – Hill or Mountain) the first mention of this name has been found
              in the Silappadikaram. There is a belief that the people living in
              the plains at the foot of the hills, should have given the name,
              the Nilgiris, in view of the violet blossoms of ‘kurinji’ flower
              enveloping the hill ranges periodically. The earliest reference to
              the political history of the Nilgiris, according to W.Francis
              relates to the Ganga Dynasty of Mysore.The District has an area of
              2452.50 sq.km. As per 2011 census the population of this district
              is as follows
            </h3>
          </Col>
        </Row>
        <br></br>
        <div className="new">
          <h1>Go By Category</h1>
        </div>
        <br></br>
        <Category city={"nilgiris"}/>
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
export default Map_Nilgiris;
