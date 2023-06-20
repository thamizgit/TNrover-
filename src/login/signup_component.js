import React, { Component } from "react";
import "../login.css";

import background from "../images/background.jpg";
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("https://tnrover-backend.onrender.com/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (fname != null) {
          alert("Registered Successfully Go Back To Sign in");
        }
      });
  }
  render() {
    return (
      <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat", backgroundSize: "cover" }} className="outline">
          <div className="inner">
      <form onSubmit={this.handleSubmit} style={{display:"flex",flexDirection:"column"}}>
        <h3 style={{textAlign:"center"}}>Sign Up</h3>

        <div className="allign">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="allign">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

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
<br></br>
        <div className="subcc">
        <Button type="submit"variant="outline-dark">
            Register <Icon.Person></Icon.Person>
          </Button>
        </div>
        <p className="ad">
          Go Back to <a href="/#">sign in ?</a>
        </p>
      </form>
      </div>
      </div>
    );
  }
}