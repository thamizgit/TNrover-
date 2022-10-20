import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row, Col} from 'react-bootstrap';
import './module.css';

import * as Icon from 'react-bootstrap-icons';
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
function MaduraiMap()
{
    return(
        <div className="main">
            <Container fluid>
                <Row>
                    <Col  md={6}><img className="img"  height='auto'  src={require('./maduraimap.jpg')}/></Col>
                    <Col md={6}><h1 className="heading"><b>Overview</b></h1>
                    <h3 className="adjustm">It is narrated in legend that Madurai was originally a forest known as Kadambavanam. One day, a farmer named Dhananjaya who was passing through the forest, saw Indra (The king of the gods), worshipping a swayambhu (self created Lingam ) under kadamba tree. Dhananjaya, the farmer immediately reported this to King Kulasekara Pandya. Kulasekara Pandya cleared the forest and built a temple around the Lingam. A city was soon planned with the temple as its centre. On the day the city was to be named, Lord Shiva is said to have appeared and drops of nectar from his hair fell on the town. So, the place was named Madurai – mathuram meaning “sweetness” in Tamil.Madurai has a rich historical background in the sense that Lord Shiva himself performed sixty-four wonders called “Thiruvilaiyadals”.The Cholas ruled Madurai from 920 AD till the beginning of the 13th century. In 1223 AD Pandyas regained their kingdom and once again become prosperous. Pandian Kings patronised Tamil language in a great way. During their period, many master-pieces were created. “Silapathikaram”, the great epic in Tamil was written based on the story of Kannagi who burnt Madurai as a result of the injustice caused to her husband Kovalan. In April 1311, Malik Kafur, the general of Alauddin Khilji who was then the ruler of Delhi, reached Madurai and raided and robbed the city for precious stones, jewels, and other rare treasures. This led to the subsequent raids by other Muslim Sultans. In 1323, the Pandya kingdom including Madurai became a province of the Delhi empire, under the Tughlaks.
                </h3>
                    </Col>
                </Row>
                <br></br>
                <div className="new">
                <h1 >Go By Category</h1>
                </div>
                <br></br>
                <div className="hove">
                <Row>
                    <Col className="rest1" md={4}><a href="/madurai/hospitals"><img src={require('./hos.png')} width={310} height={310}></img></a><h2 className="displaymap" >Hospitals</h2></Col>
                    <Col className="rest1" md={4}><a href="/madurai/restaurants"><img src={require('./res.png')} width={310} height={310}></img></a><h2 className="displaymap2">Restaurants</h2></Col>
                    <Col className="rest1" md={4}><a href=""><img src={require('./school.png')} width={310} height={310}></img></a><h2 className="displaymap">Schools</h2></Col>
                </Row>
                <br></br>
                <Row>
                <Col className="rest1" md={4}><a href=""><img src={require('./colleges.png')} width={310} height={310}></img></a><h2 className="displaymap">Colleges</h2></Col>
                    <Col className="rest1" md={4}><a href=""><img src={require('./tourist.png')} width={310} height={310}></img></a><h2 className="displaymap3">Tourist Places</h2></Col>
                    <Col className="rest1" md={4}><a href=""><img src={require('./room.png')} width={320} height={320}></img></a><h2 className="displaymap6">Hotels</h2></Col>
                    
                </Row>
                <br></br>
                <Row>
                <Col className="rest1" md={4}><a href=""><img src={require('./shopping.jpg')} width={320} height={320}></img></a><h2 className="displaymap5">Shopping</h2></Col>
                    <Col className="rest1" md={4}><a href=""><img src={require('./functionhall.png')} width={320} height={320}></img></a><h2 className="displaymap3">Function Halls</h2></Col>
                    <Col className="rest1" md={4}><a href=""><img src={require('./cinema.png')} width={310} height={310}></img></a><h2 className="displaymap5">Theatres</h2></Col>
                    
                </Row>
                <br></br>
                  </div>
                <br></br>
                
            </Container>

            <Row className="fol" justify="around">
                  <Col md={12} className="head"><h2>Follow Us For More Information</h2></Col>
                </Row>
            <footer className='ro'>
              <div>
              <a className="insta" href="https://instagram.com/_.shutter_eye._?igshid=YmMyMTA2M2Y="><Icon.Instagram  ></Icon.Instagram></a>
            
        
              <a className="face" href=""><Icon.Facebook></Icon.Facebook></a>
          
            
              <a className="link" href=""><Icon.Linkedin ></Icon.Linkedin></a>

              <a className="what" href="https://t.me/+lDs3sbk5J6tjMTI9"><Icon.Telegram ></Icon.Telegram></a>


              </div>
            </footer>
            
        </div>

    );
}
export default MaduraiMap;