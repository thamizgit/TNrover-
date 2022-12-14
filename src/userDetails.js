import React, { Component } from "react";
import "./login.css";
import background from "./userdetails.gif";


export default class UserDetails extends Component {
  
  constructor(props) {
    // const namee=this.state.userData.fname;
    
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
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
        backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat", backgroundSize: 'cover' }}  className="outlineu">
      <h1 className="adjust">{this.state.userData.fname}</h1>
      <p  className="redirect">
        <a href="/cities">
        <img src={require('./arrow.png')} width={80} />
        <figcaption >Continue</figcaption>
        </a></p>
        
      </div>

    );
  }
}