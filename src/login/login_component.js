import React, { Component } from "react";


import "../login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container , Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

import background from "../images/background.jpg";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("https://tnrover-backend.onrender.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userdetails";
        } else {
          alert("INVALID USERNAME OR PASSWORD");
        }
      });
  }
  render() {
    return (
      <div style={{ 
        backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat", backgroundSize: 'cover' }} className="outline">
          <div className="inner">
      <form onSubmit={this.handleSubmit}>
        <h3 style={{paddingLeft:"145px"}}>Sign In</h3>

        <div className="allign">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="allign">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="allign">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
             
              Remember me
            </label>
          </div>
        </div>

        <div className="subc">
          <Container fluid>
            <Row>
              <Col>
          <Button type="submit"variant="outline-dark">
            Login <Icon.ArrowBarRight />
          </Button></Col>
        <Col>
       
           <Button type="submit"variant="outline-dark"> <a href="/signup">
            Sign up<Icon.ArrowBarRight />
            </a></Button></Col>
          </Row>
          </Container>
    </div>
      </form>
      </div>
      </div>
    );
  }
}