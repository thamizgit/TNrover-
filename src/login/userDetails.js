import React, { Component } from "react";
import "../login.css";
import background from "../images/userdetails.gif";


export default class UserDetails extends Component {
  
  constructor(props) {
    // const namee=this.state.userData.fname;
    
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("https://tnrover-backend.onrender.com/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  
  render() 
  {
   
    return (
      
      <div style={{ 
        backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat", backgroundSize: 'cover',minHeight:"100vh",width:"100%" }}  className="outline">
      <h1 className="adjust">{this.state.userData.fname}</h1>
      <p  className="redirect">
        <a href="/cities">
        <img alt="user" src={require('../images/arrow.png')} width={80} />
        <figcaption >Continue</figcaption>
        </a></p>
        
      </div>

    );
  }
}