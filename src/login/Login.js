import './login.css'
import { useState, useEffect, useRef } from "react";
import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from '../hooks/useAuth';
const Login = () => {
  const {setAuth } = useAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const [success, setSuccess] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate(); 
  const location = useLocation();
  var from;
  if(location.state){
    from = location.state.from.pathname;
  }
  else{
    from = '/';
  }

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, password]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.post(
        "/login",
        JSON.stringify({
          user: user,
          pwd: password,
        }),
        {
          headers: {
            Accept: "application/json , text/plain",
            "Content-Type": "application/json",
          }
        }
      );
      const accessToken = res.data.accessToken;
      setAuth({
        username: user,
        accessToken
      });
      setUser("");
      setPassword("");
      setSuccess(true);
      navigate(from, {replace:true});
    }
    catch (err) {
      if (!err.response)
        setErrMsg('No server response')
      else if (err.response.status === 400)
        setErrMsg('Missing username or password')
      else if (err.response.status === 401)
        setErrMsg('Incorrect username or password')
      else
        setErrMsg('Login failed')
    }
    finally {
      setIsLoading(false);
    }
  };
  return (
    <main>
    <section className="App-register">
      {success ? (
        <>
          <p>You are successfully logged in</p>
          <Link style={{color:"white",textDecoration:"underline"}} to="">Go to Home Page</Link>
        </>
      ) : (
        <>
          {errMsg && (
            <p className="err-msg" ref={errRef} aria-live="assertive">
              {errMsg}
            </p>
          )}
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="user">Username :</label>
            <input
              ref={userRef}
              id="user"
              type="text"
              autoComplete="off"
              placeholder="Enter username"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <label htmlFor="pass">Password :</label>
            <input
              id="pass"
              type="password"
              placeholder="Enter password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='auth-btn' disabled={isLoading? true: false} type="submit">Sign In</button>
          </form>
          <p style={{ margin: "0.5rem", textAlign: "center" }}>
            Need an Account?
          </p>
          <Link className='sign-up'
            style={{
              textDecoration: "underline",
              color: "whitesmoke",
              alignSelf: "center",
            }}
            to="/signup"
          >
            Sign Up
          </Link>
        </>
      )}
    </section>
    </main>
  );
};
export default Login;
