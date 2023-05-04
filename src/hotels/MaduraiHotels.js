import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";

function MaduraiHotels() {
  return (
    <div className="whole">
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Hotels in Madurai</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraiheritage.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Heritage Madurai</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      11, Melakkal Rd, Near Fenner & Passport Office, Kochadai,
                      Madurai 625016
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">5 Star Hotel</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">
                      Check-in: 2:00 pm Check-out: 10:30 am
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">045 2238 5455</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 14,849</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/DjfzKVXVstaN9mqQ7"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.heritagemadurai.com/"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/madurairegency.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Regency Madurai</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      {" "}
                      38, Madakulam Main Rd, Vinayai Nagar, Palanganatham,
                      Signal Junction, Madurai 625003
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">3 Star hotel</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">Check-in:12pm Check-out: 12pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">045 2237 1155</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 4,292</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.Star></Icon.Star>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/LJHCbYsTEQmyrjDg9 "
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://hotel.yatra.com/hotel-search/dom/details?tenant=Google_HPA&ci=GHPA&htlId=TGR-00001126&city.name=Madurai&checkinDate=27/10/2022&checkoutDate=28/10/2022&appType=HOTEL&searchId=885bcbae-9e3f-4c89-9bd2-3161541b3088&roomRequests%5B0%5D.id=1&roomRequests%5B0%5D.noOfAdults=2&hotelId=00001126&htlSrchRank=1&htlFindMthd=choose+room&viewType=list&chpFare=500&excludeHotelTax=false&utm_content=X7UxYwokDmQAAyPQaPUAAAAw"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/madurairio.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Rio Grande Hotel</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      68, Melur Main Rd, Press colony, Sambakulam, Madurai
                      625020
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">3 Star Hotel</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">Check-in:12pm Check-out: 12pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">045 2495 2224</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 3,200</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://g.page/riograndemadurai?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.riogranderesidency.com/aboutus.php"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraisree.jfif")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Hotel Sree Devi</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Perumal nandavanam street,Andalpuram,Tirupparankunram Rd,
                      Madurai 625011
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">3 Star Hotel</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">Check-in:12am Check-out: 12am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">145 2438 1888</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 2,026</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.Star></Icon.Star>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/V58VHAtEz1P6tXuT9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.agoda.com/search?site_id=1731113&checkout=2022-10-28&SearchDateType=default&NumberOfAdults=2&LT=4&NumberOfChildren=0&NumberOfRooms=1&gsite=mapresults&los=1&PartnerCurrency=INR&RoomID=8566070&PriceTax=217.06&PriceTotal=2025.86&RatePlan=d0935261-7566-eb52-6762-ac5f766b8181&UserCountry=IN&Currency=INR&UserDevice=desktop&Verif=false&mcid=332&booking_source=cpc&adType=0&push_id=e30b0596-23e8-42d8-8f0c-3d228554e6f3baeecb33-f3f2-1807-3c58-0d2d43435b95&selectedproperty=1266674&city=15182&adults=2&children=0&rooms=1&hc=INR&checkin=2022-10-27"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row justify="around">
          <Col md={3} className="zoom">
            <Card className="card" style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraimariott.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Courtyard Marriott</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      168, Alagar Kovil Main Rd, KK Nagar, Ramaond Reserve Line,
                      Madurai 625002
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">3 Star Hotel</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">Check-in:3pm Check-out: 12pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">045 2424 4555</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 8,355</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/AQWoEZqMHbNEGDLV6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.marriott.com/en-us/hotels/ixmcy-courtyard-by-marriott-madurai/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraipresident.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Hotel President</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      3A, Yanaikkal St, Simmakkal, Madurai Main, Madurai, Tamil
                      Nadu 625001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">3 Star Hotel</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">Check-in:12am Check-out: 12am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">098421 70213</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 2,038</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://g.page/Hotel-President-Madurai?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://thehotelpresident.com/"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/maduraitemple.JPG")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Temple City</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Melur Main Rd, Uthangudi, Madurai Tamil Nadu 625107
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">2 Star Hotel</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">Check-in:12pm Check-out: 11am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">098946 83336</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 2,318</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.Star></Icon.Star>
                  </p>
                </Card.Text>
                <Button
                  href="https://g.page/hoteltemplecity?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://hoteltemplecity.com/"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="zoom">
            <Card style={{ width: "350px" }}>
              <Card.Img
                variant="top"
                src={require("../images/maduraiamika.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Amika Hotel</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Ring Road, 269/1D1, Airport Mattuthavani Ring Rd,
                      Avaniyapuram,Madurai 625012
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Hotel</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">Check-in:2pm Check-out: 12pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">098940 11118</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 4,134</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarHalf></Icon.StarHalf>
                  </p>
                </Card.Text>
                <Button
                  href="https://g.page/AmikaHotel?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="http://www.amikahotels.com/"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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
export default MaduraiHotels;
