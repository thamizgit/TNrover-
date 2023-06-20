import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Footer from "../footer/Footer.js";

function KovaiHotels() {
  return (
    <div className="whole">
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Hotels in Kovai</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaimetro.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Metro Park Inn</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Number : 1000, Raja St, Town Hall, Coimbatore, Tamil Nadu
                      641001
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
                    <span className="time">
                      Check-in: 12:00 pm Check-out: 12:00 am
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2420 3555</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 1,996</span>
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
                  href="https://goo.gl/maps/5hd3y19zaFLZJ1s58"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.tripadvisor.in/Hotel_Review-s1-g297675-d1400457-Reviews-Metropark_Inn-Coimbatore_Coimbatore_District_Tamil_Nadu.html"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaihash.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Hash Six Hotels</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      257, Mettupalayam Rd, Opposite sai baba kovil, Saibaba
                      Colony, Coimbatore 641043
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">4 Star hotel</span>
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
                    Phone : <span className="time">042 2455 1555</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 2,601</span>
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
                  href="https://g.page/HashSixHotels?share "
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.agoda.com/search?site_id=1731113&checkout=2022-11-30&SearchDateType=default&NumberOfAdults=2&LT=0&NumberOfChildren=0&NumberOfRooms=1&gsite=mapresults&los=1&PartnerCurrency=INR&RoomID=12952794&PriceTax=278.67&PriceTotal=2600.88&RatePlan=40e181e0-4d7e-ce05-3dcb-f8acb629efd4&UserCountry=IN&Currency=INR&UserDevice=desktop&Verif=false&mcid=332&booking_source=cpc&adType=0&push_id=7ba4a310-7a7e-45b0-9638-fa7e2971085d40e181e0-4d7e-ce05-3dcb-f8acb629efd4&selectedproperty=2275171&city=2612&adults=2&children=0&rooms=1&hc=INR&checkin=2022-11-29"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/kovaigokulam.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Gokulam Park</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      335C+729, 116/2, Avinashi Rd, Mylampatti, Venkitapuram,
                      Coimbatore 641062
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">4 Star Hotel</span>
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
                    Phone : <span className="time">042 2452 3030</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 4,169</span>
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
                  href="https://goo.gl/maps/jjo9t51Thn5xy76k8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.agoda.com/search?site_id=1731113&checkout=2022-11-30&SearchDateType=default&NumberOfAdults=2&LT=0&NumberOfChildren=0&NumberOfRooms=1&gsite=mapresults&los=1&PartnerCurrency=INR&RoomID=3080985&PriceTax=446.65&PriceTotal=4168.76&RatePlan=001810ea-1fb8-69f3-ac7e-ef6d665325a6&UserCountry=IN&Currency=INR&UserDevice=desktop&Verif=false&mcid=332&booking_source=cpc&adType=0&push_id=d73ae1b3-8b92-4a0c-8612-27d699a2dc2f001810ea-1fb8-69f3-ac7e-ef6d665325a6&selectedproperty=300105&city=2612&adults=2&children=0&rooms=1&hc=INR&checkin=2022-11-29"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaiacacia.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">The Acacia</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      2, 177C, Avinashi Rd, Opp. KGM Hospital, Chinniyampalayam,
                      Coimbatore 641062
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
                    <span className="time">Check-in:2pm Check-out: 12pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">073730 40001</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 2,097</span>
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
                  href="https://goo.gl/maps/22hbbg2D56CGWoVn8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.makemytrip.com/hotels/the_acacia_hotel-details-coimbatore.html"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
        
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaivivanta.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Vivanta</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      105, Race Course Rd, Gopalapuram, Coimbatore, Tamil Nadu
                      641018
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
                    <span className="time">Check-in:2am Check-out: 12pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2668 1000</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 8,064</span>
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
                  href="https://goo.gl/maps/ewSYudL47sptcEaH7"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.google.com/aclk?sa=l&ai=Cmbzb-jKGY6nuE4jnugTqrJiwCK35k9RYqoeu35YOwpytoecvCAoQASAAKARg5QKCAR9nb29nbGVtb2Rlcy1kZXNrdG9wLW1hcHMtaG90ZWxzoAG_8s_VAqkCXtbEAl9hsT6oAwWqBERP0MhDoRsfbTq1bXP5gOH0FSjUUl7afNHWC6x6eeuFnZrqJMUmPxLrS5W8RaMWmx-p-a5o4c4E1G6caVP29SBJL33_ocAE-amVkccDiAXP8LLfGMAFkgGgBmWIBwGQBwGoB9imsQLSCAgQAjIBADoBAMgJrAGiCp0BCgoyMDIyLTExLTI5EAEaAklOKaH6DUj3SRHcMhNib29raW5nLmNvbVN0YW5kYXJkOABIAVIYMzU1Mzk4MDFfMjAwODY4MDU2XzJfMF8wXQAA4UVlAABYRHIDSU5SggEOCggzNTUzOTgwMTICCAKKAQJkZ7ABAbgBBMgB_83kL-ABAOgBAfABAfgBAKACAOACAOoCA0lOUvACAYoDAOgKAZALA5gLAdALG6oMAggBuAwB0BUBgBcB&sig=AOD64_2dJBJI9Ht9FCo3M0Y8GHjQr1RlyQ&adurl=https://www.booking.com/hotel/in/vivanta-by-taj-surya.html?%26checkin%3D2022-11-29%26checkout%3D2022-11-30%26group_adults%3D2%26req_adults%3D2%26show_room%3D35539801_200868056_2_0_0%26lang%3Den%26selected_currency%3DINR%26exrt%3D1.00000000%26ext_price_total%3D8064.00%26ext_price_tax%3D864.00%26xfc%3DINR%26group_children%3D0%26req_children%3D0%26%26exfcam%3D_2%26ts%3D1669735430%26no_rooms%3D1%26utm_source%3Dmetagha%26utm_medium%3Dmapresults%26utm_campaign%3DIN%26utm_term%3Dhotel-355398%26utm_content%3Ddev-desktop_los-1_bw-0_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-dg_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221129_%26aid%3D1288252%26label%3Dmetagha-link-MRIN-hotel-355398_dev-desktop_los-1_bw-0_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-dg_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221129__lp-1007811_r-10397847631588076102%26gclid%3D%7Bgclid%7D"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img variant="top" src={require("../images/kovaiitc.JPG")} />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Welcomhotel ITC</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      1266/14, W Club Rd, Race Course, Gopalapuram, Coimbatore,
                      Tamil Nadu 641018
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
                    <span className="time">Check-in:12am Check-out: 12am</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">042 2222 6555</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 6,396</span>
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
                  href="https://goo.gl/maps/8SvYZQXtuYraC66o9"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://res.itchotels.com/?adult=2&arrive=2022-11-29&chain=26676&child=0&currency=INR&depart=2022-11-30&filter=META&hotel=30183&level=hotel&locale=en-US&rooms=1&src=goog_organic&start=availresults&utm_campaign=google-hpa-30183&utm_content=mapresults_29-11-2022_1_30183_IN_desktop_default___organic&utm_medium=channel_connect&utm_source=google-hpa"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                className="img"
                variant="top"
                src={require("../images/kovailemon.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Lemon Tree</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      3 & 174/4, Ranglu Naidu Farms 173, 1st Main Road,
                      Kalapatti, Tamil Nadu 641048
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">4 Star Hotel</span>
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
                    Phone : <span className="time">042 2220 5666</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 3,221</span>
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
                  href="https://g.page/lemon-tree-hotel-coimbatore?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.goibibo.com/hotels/meta/google/3924148632351062483/6574499560289602948/%7B%22ci%22:%2220221129%22,%22co%22:%2220221130%22,%22r%22:%221-2_0%22,%22ibp%22:%22v15%22%7D/?hquery=%7B%22ci%22:%2220221129%22,%22co%22:%2220221130%22,%22r%22:%221-2_0%22,%22qd%22:%2220221129-20221130-1-2_0%22,%22ibp%22:%22v15%22%7D&utm_medium=cpc_hpa&utm_campaign=Hotel_Price_Ads__6574499560289602948&vendor=gds&p=3221.00&c=INR&bookingSource=GoogleCPC&adType=0"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/kovaiibis.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Ibis Coimbatore</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      Lakshmi Mills Junction, Puliakulam Rd, Coimbatore, Tamil
                      Nadu 641037
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">3 star Hotel</span>
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
                    Phone : <span className="time">042 2711 7666</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Price : <span className="time">from INR 3,458</span>
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
                  href="https://goo.gl/maps/SbqmZSTRssJRZEFc8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.zenhotels.com/hotel/india/coimbatore/mid8635683/ibis_coimbatore_city_centre_opening_april_2017/?cur=INR&dates=29.11.2022-30.11.2022&deals=disabled&from=ibis_coimbatore_city_centre_opening_april_2017.42.USD.0f160a48.h-5cea21c4-cb53-5dc1-895f-9009ced3ef91&guests=2&lang=en&partner_extra=gacid_.bw_0.los_1.dow_Tuesday.dtype_default.hid_8635683.rid_90.aud_.d_desktop.ad_0.ctype_hotel.promo_0.apireqtype_deals%3Ddisabled&partner_slug=google&price=one&room=s-174bd7a7-4f9b-5df8-b8ce-6ec6d92b9fa7&scroll=prices&session=0&showed_price=3458.06&showed_taxes=370.71&utm_campaign=en-in&utm_content=GoogleCPC&utm_medium=cpc-metasearch&utm_source=google_hotelads&utm_term=gacid_.bw_0.los_1.dow_Tuesday.dtype_default.hid_8635683.rid_90.aud_.d_desktop.ad_0.ctype_hotel.promo_0.apireqtype_deals%3Ddisabled"
                  variant="primary"
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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
export default KovaiHotels;
