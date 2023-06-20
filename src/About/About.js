import React from "react";
import "../module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../navbar/Navbar";
import Container from "react-bootstrap/Container";
function About() {
  return (
    <div style={{ backgroudColor: "white" }}>
      <Container fluid>
        <Navbar />
        <Row>
          <Col>
            <p style={{ padding: "35px" }}>
              <img alt="asset"
                src={require("../images/aaaboutthumb.png")}
                width="100%"
                className="zooml"
                style={{margin:"1rem"}}
              />
            </p>
          </Col>
        </Row>
        <h1 className="brd">OUR SERVICES </h1>
        <Row>
          <article className="flex-layout">
            <Col md={4}>
              <img alt="asset"
                src={require("../images/aatour.png")}
                width="400px"
                className="zoomk"
                style={{margin:"1rem"}}
              />
            </Col>
            <Col md={8} className="zooml">
              <div style={{ paddingTop: "50px" }} className="brd">
                <h2>Tourist Sites</h2>
                <p>
                  A tourist attraction is a place of interest that tourists
                  visit, typically for its inherent or an exhibited natural or
                  cultural value, historical significance, natural or built
                  beauty, offering leisure and amusement.Places of natural
                  beauty such as beaches, tropical island resorts, national
                  parks, mountains, deserts and forests, are examples of
                  traditional tourist attractions which people may visit.
                  Cultural tourist attractions can include historical places,
                  sites of significant historic event, monuments, ancient
                  temples, zoos, aquaria, museums and art galleries, botanical
                  gardens, buildings and structures (such as forts, castles,
                  libraries, former prisons, skyscrapers, bridges), theme parks
                  and carnivals, living history museums, public art (sculptures,
                  statues, murals), ethnic enclave communities, historic trains
                  and cultural events. Factory tours, industrial heritage,
                  creative art and crafts workshops are the object of cultural
                  niches like industrial tourism and creative tourism. Many
                  tourist attractions are also landmarks.
                </p>
              </div>
            </Col>
          </article>
        </Row>

        <Row>
          <article className="flex-layout">
            <Col md={8} className="zooml">
              <div style={{ paddingTop: "50px" }} className="brd">
                <h2>Hospitals</h2>
                <p>
                  A teaching hospital combines assistance to people with
                  teaching to health science students and auxiliary healthcare
                  students. A health science facility smaller than a hospital is
                  generally called a clinic. Hospitals have a range of
                  departments (e.g. surgery and urgent care) and specialist
                  units such as cardiology. Some hospitals have outpatient
                  departments and some have chronic treatment units. Common
                  support units include a pharmacy, pathology, and radiology.
                  Hospitals are typically funded by public funding, health
                  organisations (for-profit or nonprofit), health insurance
                  companies, or charities, including direct charitable
                  donations. Historically, hospitals were often founded and
                  funded by religious orders, or by charitable individuals and
                  leaders
                </p>
              </div>
            </Col>
            <Col md={4}>
              <img alt="asset"
                src={require("../images/aahospital.png")}
                width="250px"
                className="zoomk"
                style={{margin:"1rem"}}
              />
            </Col>
          </article>
        </Row>

        <Row>
          <article className="flex-layout">
            <Col md={4}>
              <img alt="asset"
                src={require("../images/aaedu.png")}
                width="400px"
                className="zoomk"
                style={{margin:"1rem"}}
              />
            </Col>
            <Col md={8} className="zooml">
              <div style={{ paddingTop: "50px" }} className="brd">
                <h2>Educational Institutions </h2>
                <p>
                  An educational institution is a place where people of
                  different age groups get an education. The educational
                  institution includes childcare, preschool, elementary school,
                  high secondary schools, and universities. These educational
                  institutions provide the learning space and the learning
                  environment. Activities related to education are there in the
                  educational institution. The organization can get a building
                  and use that building to provide training and education in
                  organized courses. These educational institutions have one
                  education head; it can be the principal or any other person.
                  The institution has other personnel, teaching, and
                  nonteaching, that are there to help and give service to the
                  organization. There are different works which the personnel
                  have to do like keeping books, arranging and maintaining
                  documents, etc. The educational institutions have a curriculum
                  that all the educational institutions of the country follow.
                  Public authority takes care of the control and finance of
                  these institutions.
                </p>
              </div>
            </Col>
          </article>
        </Row>

        <Row>
          <article className="flex-layout">
            <Col md={8} className="zooml">
              <div style={{ paddingTop: "50px" }} className="brd">
                <h2>Resturants </h2>
                <p>
                  Restaurants are classified or distinguished in many different
                  ways. The primary factors are usually the food itself (e.g.
                  vegetarian, seafood, steak); the cuisine (e.g. Italian,
                  Korean, Chinese, Japanese, Indian, French, Mexican, Thai) or
                  the style of offering (e.g. tapas bar, a sushi train, a tastet
                  restaurant, a buffet restaurant or a yum cha restaurant).
                  Beyond this, restaurants may differentiate themselves on
                  factors including speed (see fast food), formality, location,
                  cost, service, or novelty themes (such as automated
                  restaurants). Some of these include fine dining, casual
                  dining, contemporary casual, family style, fast casual, fast
                  food, cafes, buffet, concession stands, food trucks, pop-up
                  restaurants, diners, and ghost restaurants. Restaurant
                  Basilica at the shoreline of Kellosaarenranta by night in
                  Ruoholahti, Helsinki, Finland Restaurants range from
                  inexpensive and informal lunching or dining places catering to
                  people working nearby, with modest food served in simple
                  settings at low prices, to expensive establishments serving
                  refined food and fine wines in a formal setting.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <img alt="asset"
                src={require("../images/aaresturant.png")}
                width="350px"
                className="zoomk"
                style={{margin:"1rem"}}
              />
            </Col>
          </article>
        </Row>

        <Row>
          <article className="flex-layout">
            <Col md={4}>
              <img alt="asset"
                src={require("../images/aatheater.jpg")}
                width="350px"
                className="zoomk"
                style={{margin:"1rem"}}
              />
            </Col>
            <Col md={8} className="zooml">
              <div style={{ paddingTop: "50px" }} className="brd">
                <h2>Theaters </h2>
                <p>
                  Theatre is a collaborative form of performing art that uses
                  live performers, usually actors or actresses, to present the
                  experience of a real or imagined event before a live audience
                  in a specific place, often a stage. The performers may
                  communicate this experience to the audience through
                  combinations of gesture, speech, song, music, and dance.
                  Elements of art, such as painted scenery and stagecraft such
                  as lighting are used to enhance the physicality, presence and
                  immediacy of the experience. The specific place of the
                  performance is also named by the word "theatre" as derived
                  from the Ancient Greek θέατρον . Modern Western theatre comes,
                  in large measure, from the theatre of ancient Greece, from
                  which it borrows technical terminology, classification into
                  genres, and many of its themes, stock characters, and plot
                  elements. Theatre artist Patrice Pavis defines theatricality,
                  theatrical language, stage writing and the specificity of
                  theatre as synonymous expressions that differentiate theatre
                  from the other performing arts, literature and the arts in
                  general. Modern theatre includes performances of plays and
                  musical theatre. The art forms of ballet and opera are also
                  theatre and use many conventions such as acting, costumes and
                  staging. They were influential to the development of musical
                  theatre.
                </p>
              </div>
            </Col>
          </article>
        </Row>
        <br />
        <h5 className="brd">Developed By</h5>

        <Row style={{
          display: "flex",
          flexFlow:"row wrap",
          justifyContent: "center",
          alignItems:"center"
        }}>

            <Col>
              <a 
                href="https://www.linkedin.com/in/thamiz-selvan-a-5675bb217?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADa6dF8BBorBCwim8quOvNhzyCWwOq_axGE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bjbmw%2FGYeQra4TrwmsU6mYw%3D%3D"
                className="ad"
              >
                <p style={{padding:"12px",backgroundColor:"lightgreen",borderRadius:"10px",maxWidth:"200px",textAlign:"center"}}>THAMIZ SELVAN</p>
              </a>
            </Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/vaibhav-shanmugasundaram-293163240/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BhmbEHWhFRJCMdNyIHXVZjQ%3D%3D"
                className="ad"
              >
                <p style={{padding:"12px",backgroundColor:"lightgreen",borderRadius:"10px",maxWidth:"200px",textAlign:"center"}}>VAIBHAV</p>
              </a>
            </Col>

            <Col>
              <a
                href="https://www.linkedin.com/in/sharath-senthil?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADcbfWcBdAkO5gSQ0_Um8gtVna2FMmXpA4c&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B6NsXne%2FhRB6c%2F4DXNvXiew%3D%3D"
                className="ad"
              >
                <p style={{padding:"12px",backgroundColor:"lightgreen",borderRadius:"10px",maxWidth:"200px",textAlign:"center"}}>SHARATH</p>
              </a>
            </Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/yogavarshan-s-693589201?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADOFVI8BIYf7LycgOS6HoE9-AKzN20tbsrI&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BmGgWTz2wT9%2BSBft58pQB%2Bw%3D%3D"
                className="ad"
              >
                <p style={{padding:"12px",backgroundColor:"lightgreen",borderRadius:"10px",maxWidth:"200px",textAlign:"center"}}>YOGAVARSHAN</p>
              </a>
            </Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/srisanjai-nallathambi-91aa7123b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADvHquYBZXcOL5dUyRYqkSpzPV11b96xjaQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BP7K9tY5iTHCt7SeM20ycAA%3D%3D"
                className="ad"
              >
                <p style={{padding:"12px",backgroundColor:"lightgreen",borderRadius:"10px",maxWidth:"200px",textAlign:"center"}}>SRI SANJAI</p>
              </a>
            </Col>
      
        </Row>
      </Container>
    </div>
  );
}
export default About;
