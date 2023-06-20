import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../navbar/Navbar.js";
import "../module.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../footer/Footer.js";

function Cuddalorehotels() {
  return (
    <div>
      <Navbar />
      <Container className="back" fluid>
        <Row justify="around">
          <Col md={12} className="head">
            <h2>Hotels in Cuddalore</h2>
          </Col>
        </Row>

        <br></br>
        <Row justify="around">
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card className="card" style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/cudd-htl-ar.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Arcot Woodlands</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      1, Bharathi Road, Manjakuppam, 9, Bharathi Rd,
                      Manjakuppam, Cuddalore,607001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">3-Hotels </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">
                      Check-in time: 2:00 pm Check-out time: 12:00 pm
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04142230717</span>
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
                  href="https://goo.gl/maps/YWypP9xRf7RysfzN6"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.google.com/aclk?sa=l&ai=C4cTPNld3Y_LsLLCJk7QPwJqeoATXst7uXYjCkOanD7rTqanpKwgKEAQgACgEYOUCggEfZ29vZ2xlbW9kZXMtZGVza3RvcC1tYXBzLWhvdGVsc6AB7fqh4AKpAooBEk2gSEo-qAMFqgRIT9D3_66vnkM-bVViBKQR6O1I-nW6kWIH8c_PQdR0kfwQLMVh3i-lTbYvJpHO0KojaHutztfbYNtzp-Qi0bcNSJlTosBTnvBjwATltJmC2wOIBb7ChJYkwAWSAaAGZYgHAZAHAagH2KaxAtIICBACMgEAOgEAyAmsAaIKbwoKMjAyMi0xMS0xORABGgJJTikUbfJg8irgajIFaWJpYm84AEgBXQBQHEVlAICdQ3IDSU5SggEEMgIIArABAbgBBMgBmLjfL-ABAegBBPABAfgBA6ACAOACAOoCA0lOUvACAYoDAKUDWIdIPKgDAOgKA5ALA5gLAdALG6oMAggBuAwB0BUBgBcB&sig=AOD64_2gVz_jCT2oz1zWl4u-hAupQkF4TQ&adurl=https://www.goibibo.com/hotels/meta/google/1708426392696051833/4255742197628888646/%257B%2522ci%2522:%252220221119%2522,%2522co%2522:%252220221120%2522,%2522r%2522:%25221-2_0%2522,%2522ibp%2522:%2522v15%2522%257D/?hquery%3D%7B%2522ci%2522:%252220221119%2522,%2522co%2522:%252220221120%2522,%2522r%2522:%25221-2_0%2522,%2522qd%2522:%252220221119-20221120-1-2_0%2522,%2522ibp%2522:%2522v15%2522%7D%26utm_medium%3Dcpc_hpa%26utm_campaign%3DHotel_Price_Ads_9709887806_4255742197628888646%26vendor%3Dgds%26p%3D2816.00%26c%3DINR%26bookingSource%3Dcommissions%26adType%3D1"
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
                src={require("../images/cudd-htl=yogi.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Yogiram Inn</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      No: 28, ALC Campus, Bharathi Rd, Manjakuppam, Cuddalore,
                      Tamil Nadu 607001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">Hotels</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">
                      Check-in time: 12:00 am Check-out time: 12:00 am
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04142220652</span>
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
                  href="https://goo.gl/maps/auptBW9EiPbiEQKx7"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.google.com/aclk?sa=l&ai=CMDLeHll3Y9KMNduU9QPJnImYAa35k9RYqoeu35YO9tW209cyCAoQAiAAKARg5QKCAR9nb29nbGVtb2Rlcy1kZXNrdG9wLW1hcHMtaG90ZWxzoAG_8s_VAqkC56c4DrxqsT6oAwWqBERP0FvQJ_wnohHnZaIpPwka8gDaqr3tum583Oiu3VSV0FqqWcsznTHqxkRyMo6tz045HydDY4SPWIWPI6LAhyxPNWzDP8AE-amVkccDiAXP8LLfGMAFkgGgBmWIBwGQBwGoB9imsQLSCAgQAjIBADoBAMgJrAGiCqMBCgoyMDIyLTExLTE5EAEaAklOKYpC_equ8z06MhNib29raW5nLmNvbVN0YW5kYXJkOABIAVIZMTc4MzMwMzAxXzM2MzAzMTY4OV8yXzBfMF0AOKlEZTNzIkNyA0lOUoIBDwoJMTc4MzMwMzAxMgIIArABAbgBBMgB_83kL-ABAegBAvABAfgBAaACAOACAOoCA0lOUvACAYoDAKUDWIdIPKgDAOgKAZALA5gLAdALG6oMAggBuAwB0BUBgBcB&sig=AOD64_059QkqCdIxUnWIZh56Vd1ds6ZCUg&adurl=https://www.booking.com/hotel/in/yogi-ram-inn.html?%26checkin%3D2022-11-19%26checkout%3D2022-11-20%26group_adults%3D2%26req_adults%3D2%26show_room%3D178330301_363031689_2_0_0%26lang%3Den%26selected_currency%3DINR%26exrt%3D1.00000000%26ext_price_total%3D1516.20%26ext_price_tax%3D162.45%26xfc%3DINR%26group_children%3D0%26req_children%3D0%26%26exfcam%3D_2%26no_rooms%3D1%26ts%3D1668564334%26utm_source%3Dmetagha%26utm_medium%3Dmapresults%26utm_campaign%3DIN%26utm_term%3Dhotel-1783303%26utm_content%3Ddev-desktop_los-1_bw-1_dow-Saturday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221119_%26aid%3D1288252%26label%3Dmetagha-link-MRIN-hotel-1783303_dev-desktop_los-1_bw-1_dow-Saturday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221119__lp-1007811_r-1448471354583424286%26gclid%3D%7Bgclid%7D"
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
                src={require("../images/cudd-htl=spds.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Hotel SPDS</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      No. 7, Nethaji Rd, Near SBI, Rajambal Nagar, Allpettai,
                      Manjakuppam, Cuddalore, Tamil Nadu 607001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">3-star hotel</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">
                      Check-in time: 12:00 am Check-out time: 12:00 am
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09629749609</span>
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
                  href="https://g.page/Hotel-SPDS?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://bookingengine.stayflexi.com/hotel/google/list/20668/?checkin=01-12-2022&num_nights=1&num_guests=2&source=google&hotel_id=20668"
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
                src={require("../images/cudd-htl-sliver.png")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-2">Hotel Advika Silver bay</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      1-4 Senthil Nagar Beach Road Cuddalore, Tamil, nadu, Tamil
                      Nadu 607001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">2-star Hotels</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">
                      Check-in time: 12:00 pm Check-out time: 12:00 pm
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">09677354222</span>
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
                  href="https://goo.gl/maps/Du11eqF1p7pGYgGVA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.goibibo.com/hotels/meta/google/1708426392696051833/4227981133552069979/%7B%22ci%22:%2220230213%22,%22co%22:%2220230214%22,%22r%22:%221-2_0%22,%22ibp%22:%22v15%22%7D/?hquery=%7B%22ci%22:%2220230213%22,%22co%22:%2220230214%22,%22r%22:%221-2_0%22,%22qd%22:%2220230213-20230214-1-2_0%22,%22ibp%22:%22v15%22%7D&utm_medium=cpc_hpa&utm_campaign=Hotel_Price_Ads__4227981133552069979&vendor=gds&p=1983.00&c=INR&bookingSource=GoogleCPC&adType=0"
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
                src={require("../images/cudd-htl-vel.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">VELSSUITES</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      # 5, E.C.R. Pondy, Cuddalore Road, Pillaiyarkuppam,
                      Puducherry 607402
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">3-star Hotels</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">Check-in time: 2:00 pm</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">06374211101</span>
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
                  href="https://grandestancia.com/dining.html"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.google.com/aclk?sa=l&ai=CJcgBYF53Y_fuC6GmoQPwj5a4DK35k9RYof6Zy6gP1YCYho03CAoQASAAKAJg5QKCAR9nb29nbGVtb2Rlcy1kZXNrdG9wLW1hcHMtaG90ZWxzoAG_8s_VAqkC56c4DrxqsT6oAwWqBERP0IaCluytuY7U0-4ITfqPSRfk6R7rBrCMWZKoXwMqKPUndG4ylHIUKgwB4kIrIjyyEJewIqtddBSANyXCrs6XvTh2U8AE3_6DmfADiAXP8LLfGMAFkgGgBmWIBwGQBwGoB9imsQLSCAgQAjIBADoBAMgJrAGiCqMBCgoyMDIyLTExLTE4EAEaAklOKc80cA6ul9nUMhNib29raW5nLmNvbVN0YW5kYXJkOABIAVIZNzk2OTk1MDAyXzMzOTg3MTA2MV8yXzBfMF0AAC9FZQAAqENyA0lOUoIBDwoJNzk2OTk1MDAyMgIIArABAbgBAMgB_83kL-ABAOgBAfABAfgBAKACAOACAOoCA0lOUvACAYoDAKUDWIdIPKgDAOgKAZALA5gLAdALG6oMAggBuAwB0BUBgBcB&sig=AOD64_14rPaLVr4xK2D3s1TbyuqJ_g8_TA&adurl=https://www.booking.com/hotel/in/vels-residency.html?%26checkin%3D2022-11-18%26checkout%3D2022-11-19%26group_adults%3D2%26req_adults%3D2%26show_room%3D796995002_339871061_2_0_0%26lang%3Den%26selected_currency%3DINR%26exrt%3D1.00000000%26ext_price_total%3D3136.00%26ext_price_tax%3D336.00%26xfc%3DINR%26group_children%3D0%26req_children%3D0%26%26exfcam%3D_2%26ts%3D1668760564%26no_rooms%3D1%26utm_source%3Dmetagha%26utm_medium%3Dmapresults%26utm_campaign%3DIN%26utm_term%3Dhotel-7969950%26utm_content%3Ddev-desktop_los-1_bw-0_dow-Friday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221118_%26aid%3D1288252%26label%3Dmetagha-link-MRIN-hotel-7969950_dev-desktop_los-1_bw-0_dow-Friday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221118__lp-1007811_r-57919761130876226%26gclid%3D%7Bgclid%7D"
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
                src={require("../images/cudd-htl-anna.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Hotel Annamalai</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      NO.3, 4, East Coast Road (Near Mahatma Gandhi Hospital,
                      Pillayarkuppam, Puducherry 607402
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time">2 star Hotels</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">
                      Check-in time: 12:00 am Check-out time: 12:00 am
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04132611055</span>
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
                  href="https://g.page/hotel-annamalai-pillayarkuppam?share"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.google.com/aclk?sa=l&ai=CI20LZl93Y5ivO96NmsMP9t2kmAnWlY6QXIS405XrD4P74OXPNAgKEAIgACgEYOUCggEfZ29vZ2xlbW9kZXMtZGVza3RvcC1tYXBzLWhvdGVsc6ABjIHO_wKoAwWqBEZP0EI3LOa28GoNboWL-lEc0wsgO2v5G8V04PClEiTjxZxBi_27EdBun0ds_JQO-s4ExHAUfrjsTUK0FrGqLJBywF92PVdmwASwp9ytgwSIBaz9rdo7wAWSAaAGZYgHAZAHAagH2KaxAtIICBACMgEAOgEAyAmsAaIKqAEKCjIwMjItMTItMDEQARoCSU4ppkjaqVz6la4yDWFnb2Rhc3RhbmRhcmQ4AEgBUiQzNmZhZDIwZS0xNGY0LWU3ZGEtM2IyYy04MGMxNTMyOGRiOGRdhecWRWW43pBDcgNJTlKCAQ8KCTM1MDI1MzM2MDICCAKwAQG4AQDIAcGP7C_gAQDoAQLwAQH4AQGgAgDgAgDqAgNJTlLwAgGKAwClA1iHSDyoAwDoCgGQCwOYCwHQCxuqDAIIAbgMAdAVAYAXAQ&sig=AOD64_0--yQzHm4Vpm4bPA0aRGn8yhS00Q&adurl=https://www.agoda.com/partners/partnersearch.aspx?site_id%3D1731113%26CkInDay%3D01%26CkInMonth%3D12%26CkInYear%3D2022%26CkOutDay%3D02%26campaignid%3D16027188908%26CkOutMonth%3D12%26CkOutYear%3D2022%26SearchDateType%3Ddefault%26NumberOfAdults%3D2%26LT%3D13%26NumberOfChildren%3D0%26childages%3D%26NumberOfRooms%3D1%26gsite%3Dmapresults%26los%3D1%26PartnerCurrency%3DINR%26hid%3D25446351%26RoomID%3D350253360%26PriceTax%3D289.74%26PriceTotal%3D2704.21%26RatePlan%3D36fad20e-14f4-e7da-3b2c-80c15328db8d%26UserCountry%3DIN%26Currency%3DINR%26UserDevice%3Ddesktop%26Verif%3Dfalse%26rr%3D%26audience_list%3D%26mcid%3D332%26booking_source%3Dcpc%26adType%3D1%26push_id%3D35d02469-0f6f-4468-becc-b117314f0e0736fad20e-14f4-e7da-3b2c-80c15328db8d/"
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
                src={require("../images/cudd-htl-sri.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Sri Valli Vilas </h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      No. 189, 2, Bharathi Rd, near HDFC Bank and a2b hotel,
                      Manjakuppam, Cuddalore,607001
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Type: <span className="time"> 3-star Hotels</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Open Hours :{" "}
                    <span className="time">
                      Check-in time: 12:00 am Check-out time: 12:00 am
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">07867004438</span>
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
                  href="https://goo.gl/maps/QYYcTgn5T28BjTKY8"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button className="menu" href="#" variant="primary">
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4} xxl={3} className="zoom">
            <Card style={{ width: "350px",margin:"2rem auto" }}>
              <Card.Img
                variant="top"
                src={require("../images/cudd-htl-vaigai.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <b>
                    <h2 class="display-1">Hotel vaigai</h2>
                  </b>
                </Card.Title>
                <Card.Text>
                  <p className="open">
                    Address :
                    <span className="time">
                      80B, Lawrence Rd, Cuddalore, Tamil Nadu , 607002
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
                    <span className="time">
                      Check-in time: 12:00 pm Check-out time: 12:00 pm
                    </span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Phone : <span className="time">04142224321</span>
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="open">
                    Rating : <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                    <Icon.StarFill></Icon.StarFill>
                  </p>
                </Card.Text>
                <Button
                  href="https://goo.gl/maps/kUXMDExipZCj81AbA"
                  className="locate"
                  variant="primary"
                >
                  Locate
                </Button>

                <Button
                  className="menu"
                  href="https://www.google.com/aclk?sa=l&ai=CzLxWWWF3Y8GrOYXWoAOMp5KAC7LNxrlsh6OHxZQQ5pyU7-YwCAoQASAAYOUCggEfZ29vZ2xlbW9kZXMtZGVza3RvcC1tYXBzLWhvdGVsc6ABrsXe3QOpAu_7Ny9OREo-qAMFqgRFT9Az4N3Zwzz_J2owzLaFby5oj8hAbcstmQSmfCQJ2O6BQqELKzhpGKtVlO00pS5vMTT8prH48Pf-CmzLgECQf0I4sB6ewASU_a6RhQSIBYDW4LVBwAWSAaAGZYgHAZAHAagH2KaxAtIICBACMgEAOgEAyAmsAaIKjQEKCjIwMjItMTItMDEQARoCSU4pl-RKp-bPBdwyCnlhdHJhX3B1bGw4AEgBUgowMDAwNTA4ODY3XQAglURl1yODQ3IDSU5SggERCgtjRWQ2MmR2Vmd0YzICCAKwAQG4AQDIAazhqTDgAQDoAQHwAQH4AQCgAgDgAgDqAgNJTlLwAgGKAwClA2FmSDyoAwDoCgKQCwOYCwHQCxuqDAIIAbgMAdAVAYAXAQ&sig=AOD64_0dfe-1WoXD0Nha3xBGkVByhvP_4g&adurl=https://hotel.yatra.com/hotel-search/dom/details?tenant%3DGoogle_HPA%26ci%3DGHPA%26htlId%3DTGR-00057649%26city.name%3DCuddalore%26checkinDate%3D01/12/2022%26checkoutDate%3D02/12/2022%26appType%3DHOTEL%26searchId%3D885bcbae-9e3f-4c89-9bd2-3161541b3088%26roomRequests%5B0%5D.id%3D1%26roomRequests%5B0%5D.noOfAdults%3D2%26hotelId%3D00057649%26htlSrchRank%3D1%26htlFindMthd%3Dchoose%2520room%26viewType%3Dlist%26chpFare%3D500%26excludeHotelTax%3Dfalse%26utm_content%3DX7UxYwokDmQAAyPQaPUAAAAw"
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
export default Cuddalorehotels;
