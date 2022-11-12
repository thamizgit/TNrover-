import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar.js';
import './module.css';
import {Container , Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function Salemhotels(){
    return(
        <div>
            
            <Navbar />
            <Container className="back" fluid>
              
                
                
                <Row justify="around">
                  <Col md={12} className="head"><h2>Hotel in Salem</h2></Col>
                </Row>
                
                <br></br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./salem-grand.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">GRAND ESTANCIA</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">349/3 Bangalore, Bypass Rd, Narasothipatti, Salem, Tamil Nadu 636004</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">4 Star Hotel</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Check-in time: 12:00 pm-Check-out time: 12:00 pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">04272777770</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Price : <span className="time">INR,2800</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/GRAND+ESTANCIA/@11.683375,78.1081385,15z/data=!4m9!1m2!2m1!1shotels+in+salem!3m5!1s0x3babf063add643cd:0x29d6c444c0c765da!5m2!4m1!1i2!15sCg9ob3RlbHMgaW4gc2FsZW1aESIPaG90ZWxzIGluIHNhbGVtkgEFaG90ZWzgAQA" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://d.adx.io/dclicks?xb=35BS11281&xd=30&xtm_source=google&xtm_content&xauto_diux=dxid&xu=http://www.cleartrip.com/hotels/details/171043?hotelID%3D171043&utm_source=GoogleHPA&utm_medium=meta&utm_campaign=171043&c=161022%7C171022&r=2,0" variant="primary">Book</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./salem-radisson.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Radisson Salem</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Mamangam, 157/3-A, Bangalore Highway, Salem, Tamil Nadu 636302</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">4 Star Hotel</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Check-in time: 12:00 pm-Check-out time: 12:00 pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">04277111222</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Price : <span className="time">INR,4480</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Radisson+Salem/@11.6922753,78.1129364,17z/data=!3m1!4b1!4m8!3m7!1s0x3babf083de512ab9:0x716ff63940baa558!5m2!4m1!1i2!8m2!3d11.6922753!4d78.1151251" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.google.com/aclk?sa=l&ai=CwHgFpjxJY9eMO5vC694Pz6amuAi7sJ36arHJ8szbD6eK7JG0MAgKEAMgACgEYOUCggEfZ29vZ2xlbW9kZXMtZGVza3RvcC1tYXBzLWhvdGVsc6ABrsG52gOpAoi85erHDko-qAMFqgRGT9BhlcXLJ8qGDW9l7hTJqqOArL1TEN705lO_cdFwgfNJajvADy87RBmCnSIDfVH2jYtqdxnayqK5SN4lBYJl42336bpN4sAEtsrtsPoDiAWxqLrcQMAFkgGgBmWIBwGQBwGoB9imsQLSCAgQAjIBADoBAJoJLmh0dHA6Ly93d3cuY2xlYXJ0cmlwLmNvbS9ob3RlbHMvZGV0YWlscy8zODIyOTDICawBogqWAQoKMjAyMi0xMC0xNBABGgJJTikCc6qwfszqQTIRSW50cmVncmF0aW9udGVzdDE4AEgBUgtfdTRRYVpNUHlNSV0AAHpFZQAA8ENyA0lOUoIBEQoLXzRuQTlvTXV1N3cyAggCsAEBuAEAyAGJ05vpBeABAOgBA_ABAfgBAqACAOACAOoCA0lOUvACAYoDAKUDBc5GPKgDAOgKApALA9ALG-ALAaoMAggBuAwB0BUBgBcB&sig=AOD64_2Dv8gysmHE6AJTD2fNspLfUgzrNw&adurl=https://d.adx.io/dclicks?xb%3D35BS11281%26xd%3D30%26xtm_source%3Dgoogle%26xtm_content%3D135930799414%26xauto_diux%3Ddxid%26xu%3Dhttp://www.cleartrip.com/hotels/details/382290%253FhotelID%253D382290%2526utm_source%253DGoogleHPA%2526utm_medium%253Dmeta%2526utm_campaign%253D382290%2526c%253D141022%257C151022%2526r%253D2,0" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./salem-cj.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">CJ Pallazzio</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">201/6, Junction Main Rd, State Bank Colony, Meyyanur, Salem, Tamil Nadu 636005</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">4 Star</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Check-in time: 12:00 pm-Check-out time: 12:00 pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">04272556677</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Price : <span className="time">INR,3960</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button  href="https://www.google.com/maps/place/CJ+Pallazzio/@11.6833745,78.1081385,15z/data=!4m9!1m2!2m1!1shotels+in+salem!3m5!1s0x3babf06605bb0f7b:0x6cb77a910a563ec7!5m2!4m1!1i2!15sCg9ob3RlbHMgaW4gc2FsZW1aESIPaG90ZWxzIGluIHNhbGVtkgEFaG90ZWzgAQA" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="https://www.google.com/aclk?sa=l&ai=CtlOeDT5JY8HhHJC70wagtZ74CPzJ05RhtO-QwLUP3fuFw-kuCAoQASAAKARg5QKCAR9nb29nbGVtb2Rlcy1kZXNrdG9wLW1hcHMtaG90ZWxzoAHV-vXgAqkCci8wKxQRSj6oAwWqBEhP0Cr5mFOxB6Qsd0qymNp1xZDl-ulyC8-QSMv7We0teJwjz3BPv1y20nN6R7Dtfs7NejiDRaTC_6lHBRpJ-6_SSmuwJEow3PvABNaj6J3-A4gF8pvLlyrABZIBoAZliAcBkAcBqAfYprEC0ggIEAIyAQA6AQDICawBogqWAQoKMjAyMi0xMC0xNBABGgJJTilBwRfVF_pyhDIKbWFrZW15dHJpcDgASAFSC0p2R1VXOVRhbENjXc3cW0VlZmbdQ3IDSU5SggEZChNFeGVjdXRpdmUgVHdpbiBSb29tMgIIArABAbgBBMgBhtPcL-ABAegBAfABAfgBAKACAOACAOoCA0lOUvACAYoDAKUDjd9GPKgDAOgKAZALA5gLAdALG6oMAggBuAwB0BUBgBcB&sig=AOD64_1Y0bs_G_kw1G0hFH78kRgVkbWA4Q&adurl=https://www.makemytrip.com/hotels/hotel-listing/?topHtlId%3D20160223161955336%26city%3DCTXSE%26country%3DIN%26checkin%3D10142022%26checkout%3D10152022%26roomStayQualifier%3D2e0e%26totalGuestCount%3D2%26roomCount%3D1%26cmp%3Dgooglehoteldfinder_DH_META_Paid_IN_mapresults_20160223161955336%26_uCurrency%3DINR%26Campaign%3D11323756018%26locusId%3DCTXSE%26locusType%3Dcity%26mtkeys%3D" variant="primary">Visit</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./salem-windos.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-2">Hotel Windsor Castle</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">14, Rajaji Rd, Peramanur, Salem, Tamil Nadu 636007</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time"></span>4 Star</p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Check-in time: 12:00 pm-Check-out time: 12:00 pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">04274055600</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Price : <span className="time">INR,4490</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Hotel+Windsor+Castle/@11.6670782,78.1492232,17z/data=!3m1!4b1!4m8!3m7!1s0x3babf04a24c001e7:0xae9e78e5aa417385!5m2!4m1!1i2!8m2!3d11.6671147!4d78.1514198" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.google.com/aclk?sa=l&ai=CRAdbxT5JY_jPNLSB694Pl6qLmASt-ZPUWKqHrt-WDpeA_bKTMAgKEAIgACgEYOUCggEfZ29vZ2xlbW9kZXMtZGVza3RvcC1tYXBzLWhvdGVsc6ABv_LP1QKpAnBZhc0AU7A-qAMFqgRET9DtpgbmpHdYycglH49dA9BdN9yftFOgDzQkjqwkS1BzvEPS06vcx9jL7HJTjanwvqnPrF-6uxjJLzyySZ75TsMJi_bABPmplZHHA4gFz_Cy3xjABZIBoAZliAcBkAcBqAfYprEC0ggIEAIyAQA6AQDICawBogqkAQoKMjAyMi0xMC0xNBABGgJJTimKwHq6kqMiYTITYm9va2luZy5jb21TdGFuZGFyZDgASAFSGjUzOTc1NDYwNF8zMzY0OTQzNDdfMF80MV8wXQDweUVlo_DvQ3IDSU5SggEPCgk1Mzk3NTQ2MDQyAggCsAEBuAEAyAH_zeQv4AEC6AEC8AEB-AEBoAIA4AIA6gIDSU5S8AIBigMApQON30Y8qAMA6AoBkAsDmAsB0AsbqgwCCAG4DAHQFQGAFwE&sig=AOD64_2oyvZfbYfTH_nzGDKGrpEqB4IKWA&adurl=https://www.booking.com/hotel/in/windsor-castle-salem1.html?%26checkin%3D2022-10-14%26checkout%3D2022-10-15%26group_adults%3D2%26req_adults%3D2%26show_room%3D539754604_336494347_0_41_0%26lang%3Den%26selected_currency%3DINR%26exrt%3D1.00000000%26ext_price_total%3D4478.88%26ext_price_tax%3D479.88%26xfc%3DINR%26group_children%3D0%26req_children%3D0%26%26exfcam%3D_2%26no_rooms%3D1%26ts%3D1665599925%26utm_source%3Dmetagha%26utm_medium%3Dmapresults%26utm_campaign%3DIN%26utm_term%3Dhotel-5397546%26utm_content%3Ddev-desktop_los-1_bw-0_dow-Friday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221014_%26aid%3D1288252%26label%3Dmetagha-link-MRIN-hotel-5397546_dev-desktop_los-1_bw-0_dow-Friday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221014__lp-1007811_r-4413213942027635867%26gclid%3D%7Bgclid%7D" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
 </Row>
                <br>
                </br>
                <br>
                </br>
                <Row justify="around" >
                 <Col md={3} className="zoom"> 
                <Card className="card" style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./salem-castle.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Hotel Salem Castle</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">Plot No. A, 4, Bharathi St, Swarnapuri, Salem, Tamil Nadu 636004</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">3 Star</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Check-in time: 12:00 pm-Check-out time: 12:00 pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">09843911175</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Price : <span className="time">INR,2910</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.Star></Icon.Star></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Hotel+Salem+Castle/@11.6739467,78.1336854,18.68z/data=!4m8!3m7!1s0x3babf042e52f4fb3:0xcf9b1651f60ec1b!5m2!4m1!1i2!8m2!3d11.6737006!4d78.1359332" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.makemytrip.com/hotels/hotel-listing/?topHtlId=201401121355025921&city=CTXSE&country=IN&checkin=10142022&checkout=10152022&roomStayQualifier=2e0e&totalGuestCount=2&roomCount=1&cmp=googlehoteldfinder_DH_META_Free__IN_mapresults_201401121355025921&_uCurrency=INR&Campaign&locusId=CTXSE&locusType=city&mtkeys" variant="primary">Visit</Button>
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./salem-palm.jpeg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">The Palm Residency</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">24/1A/1 Salem - Kochi Highway Chinna Seeragapadi Nallarayampatti,Tamil Nadu 636308</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">3 star</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Check-in time: 12:00 pm-Check-out time: 12:00 pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">08680977777</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Price : <span className="time">INR,1470</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/The+Palm+Residency/@11.589862,78.0675595,17z/data=!3m1!4b1!4m8!3m7!1s0x3babe5abede7b2a7:0x65ca873094fe6e61!5m2!4m1!1i2!8m2!3d11.5898566!4d78.0697473" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.google.com/aclk?sa=l&ai=CeZHbmI1JY9KhDJC70wagtZ74CPzJ05Rh0prGsMYP9qrs6vAuCAoQASAAKARg5QKCAR9nb29nbGVtb2Rlcy1kZXNrdG9wLW1hcHMtaG90ZWxzoAHV-vXgAqkCSrN5HAYbSj6oAwWqBEhP0K_VIPz9Z-MtVE5g5rRyHlH0_frxtMfo3R8dsn5GNUmSrX9AL_xqdKdYVkvLGux7S_EzRt9zJbWKbLXiY1eGBP6XCeCfBH7ABNqXmJX7A4gF8pvLlyrABZIBoAZliAcBkAcBqAfYprEC0ggIEAIyAQA6AQDICawBogqUAQoKMjAyMi0xMC0xNBABGgJJTikTKHTquOyeGDIKbWFrZW15dHJpcDgASAFSC2JsRHJHem94U0pvXQAgpERlXI8dQ3IDSU5SggEXChFQcmVtaXVtIEV4ZWN1dGl2ZTICCAKwAQG4AQDIAYbT3C_gAQDoAQHwAQH4AQCgAgDgAgDqAgNJTlLwAgGKAwClA20rRzyoAwDoCgGQCwOYCwHQCxuqDAIIAbgMAdAVAYAXAQ&sig=AOD64_0sU1bB-0l-yXD6e2yD3g6ReruHYw&adurl=https://www.makemytrip.com/hotels/hotel-listing/?topHtlId%3D201712061347525891%26city%3DCTXSE%26country%3DIN%26checkin%3D10142022%26checkout%3D10152022%26roomStayQualifier%3D2e0e%26totalGuestCount%3D2%26roomCount%3D1%26cmp%3Dgooglehoteldfinder_DH_META_Paid_IN_mapresults_201712061347525891%26_uCurrency%3DINR%26Campaign%3D11323756018%26locusId%3DCTXSE%26locusType%3Dcity%26mtkeys%3D" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img className="img" variant="top" src={require('./salem-rathna.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Hotel Rathna Residency</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">E Block Three Roads, 17 14, Suramangalam Main Rd, Pallapatti,Tamil Nadu 636009</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Hotel</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Check-in time: 12:00 pm-Check-out time: 12:00 pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">04272446744</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Price : <span className="time">INR,3847</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarHalf></Icon.StarHalf></p>
        </Card.Text>
        <Button  href="https://www.google.com/maps/place/Hotel+Rathna+Residency/@11.6638761,78.1302273,17z/data=!3m1!4b1!4m8!3m7!1s0x3babf01549ed90f3:0x7531bad4aa959741!5m2!4m1!1i2!8m2!3d11.6638761!4d78.132416" className="locate" variant="primary">Locate</Button>
        
        <Button className="menu"  href="https://www.google.com/aclk?sa=l&ai=CQzSRH49JY6qiKZHBmsMPstSzsAib0KmWa9ec-eKaEIm4tLiEMQgKEAEgACgDYOUCggEfZ29vZ2xlbW9kZXMtZGVza3RvcC1tYXBzLWhvdGVsc6AB1fr14AKpAkqzeRwGG0o-qAMFqgRIT9B4gOyxWjtTH-ynkSUTX4wYpaZ353XljOwuBBhaGJ41HEqWpQvnyf_6zezouokMlhon4BU7sSBn59j6ZFFnYCaGp9P9iYpcwASlg6CogwSIBYLX_olCwAWSAaAGZYgHAZAHAagH2KaxAtIICBACMgEAOgEAyAmsAaIKiAEKCjIwMjItMTAtMTQQARoCSU4p0xSkjDvFHTMyCm1ha2VteXRyaXA4AEgBUgtjUjdMOU1TUXI1SV3hxklFZVKYGkRyA0lOUoIBCwoFU3VpdGUyAggCsAEBuAEAyAGG09wv4AEC6AEB8AEB-AEAoAIA4AIA6gIDSU5S8AIBigMApQNtK0c8qAMA6AoBkAsDmAsB0AsbqgwCCAG4DAHQFQGAFwE&sig=AOD64_3JeXYMq95LkKMF03CafC2vwLyVaA&adurl=https://www.makemytrip.com/hotels/hotel-listing/?topHtlId%3D201712081250039855%26city%3DCTXSE%26country%3DIN%26checkin%3D10142022%26checkout%3D10152022%26roomStayQualifier%3D2e0e%26totalGuestCount%3D2%26roomCount%3D1%26cmp%3Dgooglehoteldfinder_DH_META_Paid_IN_mapresults_201712081250039855%26_uCurrency%3DINR%26Campaign%3D17737689986%26locusId%3DCTXSE%26locusType%3Dcity%26mtkeys%3D" variant="primary">Visit</Button>
        
      </Card.Body>
    </Card>
    </Col>  
    <Col md={3} className="zoom"> 
                <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={require('./salem-devi.jpg')  } />
      <Card.Body>
        <Card.Title><b><h2 class="display-1">Hotel Devi Towers</h2></b></Card.Title>
        <Card.Text><p className="open">
          Address  :<span className="time">166, 166, 3, Sarada College Rd, New Fairlands, Narasothipatti,salem,Tamil Nadu 636004</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Type: <span className="time">Hotel</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Open Hours : <span className="time">Check-in time: 12:00 pm-Check-out time: 12:00 pm</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Phone : <span className="time">144 2220 0000</span></p>
        </Card.Text>
        <Card.Text>
            <p className="open">Price : <span className="time">INR,1520</span></p>
        </Card.Text>
        
        <Card.Text>
            <p className="open">Rating : <Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill><Icon.StarFill></Icon.StarFill></p>
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Hotel+Devi+Towers/@11.6757551,78.1331715,17z/data=!3m1!4b1!4m8!3m7!1s0x3babf05d34e9444d:0x8e7223dcb0393cea!5m2!4m1!1i2!8m2!3d11.6757551!4d78.1353602" className="locate" variant="primary">Locate</Button>

        <Button className="menu"  href="https://www.google.com/aclk?sa=l&ai=CWytlr5BJY42PD97k694PsbqoqA7WlY6QXPTV0pXrD9zTo4fjMQgKEAEgAGDlAoIBH2dvb2dsZW1vZGVzLWRlc2t0b3AtbWFwcy1ob3RlbHOgAYyBzv8CqAMFqgRGT9DK5DQ4A8EbmGH1dsmRBPfkr_lTP_DNeYanZ4xHtvYeKpwWAIZDrbFWeSL28qeONzsAwyugPdYddR2re9pfJDW1RCOpHMAEoMXbrYMEiAWs_a3aO8AFkgGgBmWIBwGQBwGoB9imsQLSCAgQAjIBADoBAMgJrAGiCqgBCgoyMDIyLTEwLTMwEAEaAklOKbp3Z0S9uLHKMg1hZ29kYXN0YW5kYXJkOABIAVIkMDk3M2YyMTgtZDA0NC03ZmEyLWM4M2EtNjZkYjY5ZWQxYTcwXVx_qkRlFK4jQ3IDSU5SggEPCgk0Nzk4Njc5NDAyAggCsAEBuAEAyAHBj-wv4AEA6AEB8AEB-AEAoAIA4AIA6gIDSU5S8AIBigMApQO1CUc8qAMA6AoBkAsDmAsB0AsbqgwCCAG4DAHQFQGAFwE&sig=AOD64_1iG567u_0asHQhrxyFMEoKvGkbhg&adurl=https://www.agoda.com/partners/partnersearch.aspx?site_id%3D1731113%26CkInDay%3D30%26CkInMonth%3D10%26CkInYear%3D2022%26CkOutDay%3D31%26campaignid%3D16027188908%26CkOutMonth%3D10%26CkOutYear%3D2022%26SearchDateType%3Ddefault%26NumberOfAdults%3D2%26LT%3D16%26NumberOfChildren%3D0%26childages%3D%26NumberOfRooms%3D1%26gsite%3Dmapresults%26los%3D1%26PartnerCurrency%3DINR%26hid%3D30632616%26RoomID%3D479867940%26PriceTax%3D163.68%26PriceTotal%3D1527.66%26RatePlan%3D0973f218-d044-7fa2-c83a-66db69ed1a70%26UserCountry%3DIN%26Currency%3DINR%26UserDevice%3Ddesktop%26Verif%3Dfalse%26rr%3D%26audience_list%3D%26mcid%3D332%26booking_source%3Dcpc%26adType%3D1%26push_id%3D02cfda68-d38b-43d0-9620-e4b57ff81cbcce5997c2-934c-5ff9-2c34-ca61abbfd0dc" variant="primary">Visit</Button>
        
        
        
      </Card.Body>
    </Card>
    </Col>  
 </Row>

            </Container>
            <br></br>
            <Row className="fol" justify="around">
                  <Col md={12} className="head"><h2>Follow Us For More Information</h2></Col>
                </Row>
            <footer className='ro'>
              <div>
              <a className="insta" href=""><Icon.Instagram  ></Icon.Instagram></a>
            
        
              <a className="face" href=""><Icon.Facebook  ></Icon.Facebook></a>
          
            
              <a className="link" href=""><Icon.Linkedin ></Icon.Linkedin></a>

              <a className="what" href=""><Icon.Whatsapp ></Icon.Whatsapp></a>


              </div>
            </footer>

        
        </div>

    );
}
export default Salemhotels;