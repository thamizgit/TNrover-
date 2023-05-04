import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../module.css";

import Footer from "../footer/Footer";
import Category from "../category/Category";
function MaduraiMap() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img
              className="img"
              height="auto"
              src={require("../images/maduraimap.jpg")}
            />
          </Col>
          <Col md={6}>
            <h1 className="heading">
              <b>Overview</b>
            </h1>
            <h3 className="adjustm">
              It is narrated in legend that Madurai was originally a forest
              known as Kadambavanam. One day, a farmer named Dhananjaya who was
              passing through the forest, saw Indra (The king of the gods),
              worshipping a swayambhu (self created Lingam ) under kadamba tree.
              Dhananjaya, the farmer immediately reported this to King
              Kulasekara Pandya. Kulasekara Pandya cleared the forest and built
              a temple around the Lingam. A city was soon planned with the
              temple as its centre. On the day the city was to be named, Lord
              Shiva is said to have appeared and drops of nectar from his hair
              fell on the town. So, the place was named Madurai – mathuram
              meaning “sweetness” in Tamil.Madurai has a rich historical
              background in the sense that Lord Shiva himself performed
              sixty-four wonders called “Thiruvilaiyadals”.The Cholas ruled
              Madurai from 920 AD till the beginning of the 13th century. In
              1223 AD Pandyas regained their kingdom and once again become
              prosperous. Pandian Kings patronised Tamil language in a great
              way. During their period, many master-pieces were created.
              “Silapathikaram”, the great epic in Tamil was written based on the
              story of Kannagi who burnt Madurai as a result of the injustice
              caused to her husband Kovalan. In April 1311, Malik Kafur, the
              general of Alauddin Khilji who was then the ruler of Delhi,
              reached Madurai and raided and robbed the city for precious
              stones, jewels, and other rare treasures. This led to the
              subsequent raids by other Muslim Sultans. In 1323, the Pandya
              kingdom including Madurai became a province of the Delhi empire,
              under the Tughlaks.
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

      <Row className="fol" justify="around">
        <Col md={12} className="head">
          <h2>Follow Us For More Information</h2>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
export default MaduraiMap;
