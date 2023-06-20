import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../module.css";
import Category from "../category/Category";
import Footer from "../footer/Footer";
function KovaiMap() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img alt="kovai_map"
              className="img"
              height="auto"
              src={require("../images/kovaimap.jpg")}
            />
          </Col>
          <Col md={6}>
            <h1 className="heading">
              <b>Overview</b>
            </h1>
            <h3 className="adjustm">
              Coimbatore is the third largest city of the state, one of the most
              industrialized cities in Tamil Nadu, known as the textile capital
              of South India or the Manchester of the South India, the city is
              situated on the banks of the river Noyyal, Coimbatore existed even
              prior to the 2nd or 3rd century AD by Karikalan, the first of the
              early Cholas. Among its other great rulers were Rashtrakutas,
              Chalukyas, Pandyas, Hoysalas and the Vijayanagara kings. When
              Kongunadu fell to the British along with the rest of the state,
              its name was changed to Coimbatore and it is by this name that it
              is known today, in local Tamil language it is also called as
              Kovai. In the rain shadow region of the Western ghats, Coimbatore
              enjoys a very pleasant climate all the year round, aided by the
              fresh breeze that flows through the 25 kms long Palakkad gap. The
              rich black soil of the region has contributed to Coimbatore’s
              flourishing agriculture industry and, it is in fact the successful
              growth of cotton that served as a foundation for the establishment
              of its famous textile industry. The first textile mill came as far
              back as 1888 after that many textile mills were started and
              provided many employment opportunities to within as well as
              neighboring Districts. The result has been a strong economy and a
              reputation as one of the greatest industrial cities in South
              India. There are more than 25,000 small, medium, large scale
              industries and textile mills are situated. Coimbatore is also
              famous for foundry and automobile industries, manufacturing of
              textile industry equipment’s, spares, motor pump sets, wet
              grinders and varied engineering goods and services. The
              development of Hydro electricity from the Pykara Falls in the 1930
              led to a cotton boom in Coimbatore. Coimbatore serves as an entry
              and exit point to neighboring Kerala State and the very popular
              hill station of Udhagamandalam (Ooty) is 70 kms from Coimbatore.
              It is the disembarking point for those who want to take the
              Mountain train that runs from Mettupalayam just 35 kms away from
              Coimbatore, regular bus services also available daily from
              Coimbatore to Ooty and other districts, towns and major cities.
            </h3>
          </Col>
        </Row>
        <br></br>
        <div className="new">
          <h1>Go By Category</h1>
        </div>
        <br></br>
        <Category city={"kovai"}/>
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
export default KovaiMap;
