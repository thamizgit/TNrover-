import {  Col,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
const Category = ({city}) => {
  return (
    <div className="hove">
      <Container className="flex-layout">
        
          <Col   md={4} lg={5} xl={4} xxl={3} style={{margin:"0 auto"}}>
            <Link to={`/${city}/hospitals`}>
              <img style={{margin:"auto 0"}}
                alt="img"
                src={require("../images/hos.png")}
                width={310}
                height={310}
               
              />
            </Link>
            <h2 style={{margin:"0 auto",textAlign:"center",marginTop:"1rem"}} >Hospitals</h2>
          </Col>
          
          <Col   md={4} lg={5} xl={4} xxl={3} style={{margin:"0 auto"}}>
            <Link to={`/${city}/restaurants`}>
              <img
                alt="img"
                src={require("../images/res.png")}
                width={310}
                height={310}
              ></img>
            </Link>
            <h2 style={{margin:"0 auto",textAlign:"center",marginTop:"1rem"}} >Restaurants</h2>
          </Col>
          <Col  style={{margin:"0 auto"}}  md={4} lg={5} xl={4} xxl={3}>
            <Link to={`/${city}/schools`}>
              <img
                alt="img"
                src={require("../images/school.png")}
                width={310}
                height={310}
              ></img>
            </Link>
            <h2 style={{margin:"0 auto",textAlign:"center",marginTop:"1rem"}}>Schools</h2>
          </Col>
       
      
      <br></br>
      
      
        <Col  style={{margin:"0 auto"}}  md={4} lg={5} xl={4} xxl={3}>
          <Link to={`/${city}/colleges`}>
            <img
              alt="img"
              src={require("../images/colleges.png")}
              width={310}
              height={310}
            ></img>
          </Link>
          <h2 style={{margin:"0 auto",textAlign:"center",marginTop:"1rem"}}>Colleges</h2>
        </Col>
        <Col  style={{margin:"0 auto"}}  md={4} lg={5} xl={4} xxl={3}>
          <Link to={`/${city}/tourist`}>
            <img
              alt="img"
              src={require("../images/tourist.png")}
              width={310}
              height={310}
            ></img>
          </Link>
          <h2 style={{margin:"0 auto",textAlign:"center",marginTop:"1rem"}}>Tourist Places</h2>
        </Col>
        <Col  style={{margin:"0 auto"}}  md={4} lg={5} xl={4} xxl={3}>
          <Link to={`theatres`}>
            <img
              alt="img"
              src={require("../images/cinema.png")}
              width={310}
              height={310}
            ></img>
          </Link>
          <h2 style={{margin:"0 auto",textAlign:"center",marginTop:"1rem"}}>Theatres</h2>
          </Col>
          
      
      <br></br>
      
       
        <Col  style={{margin:"0 auto"}}  md={4} lg={5} xl={4} xxl={3}>
          <Link to={`/${city}/shops`}>
            <img
              alt="img"
              src={require("../images/shopping.jpg")}
              width={320}
              height={320}
            ></img>
          </Link>
          <h2 style={{margin:"0 auto",textAlign:"center",marginTop:"1rem"}}>Shopping</h2>
        </Col>
        <Col  style={{margin:"0 auto"}}  md={4} lg={5} xl={4} xxl={3}>
          <Link to={`/${city}/hotels`}>
            <img
              alt="img"
              src={require("../images/room.png")}
              width={320}
              height={320}
            ></img>
          </Link>
          <h2 style={{margin:"0 auto",textAlign:"center",marginTop:"1rem"}}>Hotels</h2>
        </Col>
        <Col  style={{margin:"0 auto"}}  md={4} lg={5} xl={4} xxl={3}>
          <Link to={`/${city}/functionhalls`}>
            <img
              alt="img"
              src={require("../images/functionhall.png")}
              width={310}
              height={310}
            ></img>
          </Link>
          <h2 style={{margin:"0 auto",textAlign:"center",marginTop:"1rem"}}>Function Halls</h2>
          </Col>
         
      </Container>
      <br></br>
    </div>
  );
};
export default Category;
